const Order = require("../models/Order");
const Resource = require("../models/Resource");

exports.createOrder = async (req, res) => {
  try {
    const { resourceId } = req.body;

    // Find resource
    const resource = await Resource.findById(resourceId);

    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    // Create order
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

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Only owner (seller) can update
    if (order.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    order.status = status;
    await order.save();

    res.json({ message: "Status updated", order });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= ADMIN: GET ALL RENTALS =================
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