const User = require("../models/User");
const Resource = require("../models/Resource");


// ================= DASHBOARD STATS =================

exports.getDashboardStats = async (req, res) => {
  try {

    const totalUsers = await User.countDocuments();
    const totalResources = await Resource.countDocuments();
    const availableResources = await Resource.countDocuments({ isAvailable: true });

    res.json({
      totalUsers,
      totalResources,
      availableResources
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