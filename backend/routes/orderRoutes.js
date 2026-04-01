const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware");

const { getAllOrders } = require("../Controllers/orderController");


const {
  createOrder,
  getMyOrders,
  updateOrderStatus
} = require("../Controllers/orderController");

// POST → create request
router.post("/", authMiddleware, createOrder);

// GET → seller orders
router.get("/my", authMiddleware, getMyOrders);

// PUT → update status
router.put("/:id", authMiddleware, updateOrderStatus);

// ADMIN route
router.get("/all", authMiddleware, getAllOrders);

module.exports = router;