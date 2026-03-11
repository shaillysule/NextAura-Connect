const adminMiddleware = (req, res, next) => {
  try {

    // user must be logged in first (AuthMiddleware runs before this)
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    // check role
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    next();

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = adminMiddleware;