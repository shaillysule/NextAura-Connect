const express = require("express");
const router = express.Router();

// ✅ IMPORT EVERYTHING CORRECTLY
const {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword,
  deleteAccount,
  getMe // ✅ ADD THIS
} = require("../Controllers/authController");

const authMiddleware = require("../middleware/AuthMiddleware");

// ================= AUTH =================
router.post("/register", register);
router.post("/login", login);

// ================= PROFILE =================
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

// ================= SECURITY =================
router.put("/change-password", authMiddleware, changePassword);
router.delete("/delete-account", authMiddleware, deleteAccount);

// ================= CURRENT USER =================
router.get("/me", authMiddleware, getMe);

module.exports = router;