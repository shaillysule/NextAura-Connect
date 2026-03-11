const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware");
const adminMiddleware = require("../middleware/AdminMiddleware");

const adminController = require("../Controllers/adminController");


// Dashboard stats
router.get("/stats", authMiddleware, adminMiddleware, adminController.getDashboardStats);


// Users
router.get("/users", authMiddleware, adminMiddleware, adminController.getAllUsers);
router.delete("/users/:id", authMiddleware, adminMiddleware, adminController.deleteUser);


// Resources
router.get("/resources", authMiddleware, adminMiddleware, adminController.getAllResources);
router.delete("/resources/:id", authMiddleware, adminMiddleware, adminController.deleteResource);


module.exports = router;