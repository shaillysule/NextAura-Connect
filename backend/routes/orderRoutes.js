const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware");

const {
  createOrder,
  getMyOrders,
  updateOrderStatus,
  getAllOrders,
  getMyRequests,
  getMyActiveRentals,
  completeRental,
  getCompletedRentals,
} = require("../Controllers/orderController");

// POST → create request
router.post("/", authMiddleware, createOrder);

// GET → seller orders
router.get("/my", authMiddleware, getMyOrders);

// GET → customer requests ✅
router.get("/my-requests", authMiddleware, getMyRequests);

// PUT → update status
router.put("/:id", authMiddleware, updateOrderStatus);

// ADMIN route
router.get("/all", authMiddleware, getAllOrders);

router.get("/my-active", authMiddleware, getMyActiveRentals);

router.put("/complete/:id", authMiddleware, completeRental);

router.get("/history", authMiddleware, getCompletedRentals);

module.exports = router;