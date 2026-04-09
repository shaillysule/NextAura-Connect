const Order = require("../models/Order");
const Resource = require("../models/Resource");

// ================= CREATE ORDER =================
exports.createOrder = async (req, res) => {
  try {
    const { resourceId } = req.body;

    const resource = await Resource.findById(resourceId);

    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    const order = new Order({
      resource: resource._id,
      owner: resource.owner,
      customer: req.user.id,
    });

    await order.save();

    res.status(201).json({ message: "Request sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= SELLER ORDERS =================
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ owner: req.user.id })
      .populate("customer", "name email")
      .populate("resource", "title rentPerDay");

    res.json(orders);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= UPDATE STATUS (🔥 FIXED) =================
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Only owner can update
    if (order.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // ✅ WHEN APPROVED → SET DATES
    if (status === "Approved") {
      const today = new Date();

      order.startDate = today;

      const returnDate = new Date();
      returnDate.setDate(today.getDate() + 3); // default 3 days

      order.returnDate = returnDate;
    }

    order.status = status;
    await order.save();

    res.json({ message: "Status updated", order });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= COMPLETE RENTAL =================
exports.completeRental = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // only owner can complete
    if (order.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    order.isCompleted = true;
    await order.save();

    res.json({ message: "Rental completed", order });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= ADMIN: ALL ORDERS =================
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer", "name")
      .populate("owner", "name")
      .populate("resource", "title");

    res.json(orders);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= CUSTOMER REQUESTS =================
exports.getMyRequests = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user.id })
      .populate("owner", "name email")
      .populate("resource", "title rentPerDay");

    res.json(orders);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= ACTIVE RENTALS =================
exports.getMyActiveRentals = async (req, res) => {
  try {
    const rentals = await Order.find({
      customer: req.user.id,
      status: "Approved",
      isCompleted: false, // ✅ IMPORTANT
    })
      .populate("resource", "title rentPerDay image")
      .populate("owner", "name");

    res.json(rentals);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getCompletedRentals = async (req, res) => {
  try {
    const orders = await Order.find({
      isCompleted: true,
      $or: [
        { owner: req.user.id },     // seller view
        { customer: req.user.id }   // customer view
      ]
    })
      .populate("resource", "title rentPerDay")
      .populate("owner", "name")
      .populate("customer", "name");

    res.json(orders);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};