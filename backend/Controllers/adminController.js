const User = require("../models/User");
const Resource = require("../models/Resource");
const Order = require("../models/Order"); 


// ================= DASHBOARD STATS =================

exports.getDashboardStats = async (req, res) => {
  try {

    const totalUsers = await User.countDocuments();
    const totalResources = await Resource.countDocuments();

    // ✅ NEW
    const activeRentals = await Order.countDocuments({
      status: "Active",
    });

    const pendingApprovals = await Order.countDocuments({
      status: "Pending",
    });

    // ✅ Revenue calculation
    const orders = await Order.find({
      status: { $in: ["Active", "Completed"] },
    }).populate("resource");

    let totalRevenue = 0;

    orders.forEach((order) => {
      if (order.resource?.rentPerDay) {
        totalRevenue += order.resource.rentPerDay;
      }
    });

    res.json({
      totalUsers,
      totalResources,
      activeRentals,
      pendingApprovals,
      totalRevenue
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= GET ALL USERS =================

exports.getAllUsers = async (req, res) => {
  try {

    const users = await User.find().select("-password");

    res.json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= DELETE USER =================

exports.deleteUser = async (req, res) => {
  try {

    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "User deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= GET ALL RESOURCES =================

exports.getAllResources = async (req, res) => {
  try {

    const resources = await Resource.find().populate("owner", "name email");

    res.json(resources);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= DELETE RESOURCE =================

exports.deleteResource = async (req, res) => {
  try {

    await Resource.findByIdAndDelete(req.params.id);

    res.json({ message: "Resource deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};