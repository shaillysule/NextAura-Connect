const Resource = require("../models/Resource");
const Order = require("../models/Order");

exports.getSellerStats = async (req, res) => {
  try {
    const sellerId = req.user.id;

    const totalProducts = await Resource.countDocuments({
      owner: sellerId,
    });

    const activeOrders = await Order.countDocuments({
      owner: sellerId,
      status: "Approved",
    });

    const pendingOrders = await Order.countDocuments({
      owner: sellerId,
      status: "Pending",
    });

    const totalRevenueData = await Order.find({
      owner: sellerId,
      status: "Approved",
    }).populate("resource", "rentPerDay");

    let totalRevenue = 0;
    totalRevenueData.forEach((o) => {
      totalRevenue += o.resource?.rentPerDay || 0;
    });

    res.json({
      totalProducts,
      activeOrders,
      pendingOrders,
      totalRevenue,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};