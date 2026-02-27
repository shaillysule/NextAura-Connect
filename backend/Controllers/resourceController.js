const Resource = require("../models/Resource");

// POST /api/resources — Seller adds a new resource
exports.addResource = async (req, res) => {
  try {
    const resource = new Resource({
      ...req.body,
      owner: req.user.id, // ✅ matches Resource.js model field "owner"
    });

    await resource.save();
    res.status(201).json({ message: "Resource added successfully", resource });
  } catch (error) {
    console.error("addResource error:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET /api/resources/my — Seller sees only their resources
exports.getMyResources = async (req, res) => {
  try {
    const resources = await Resource.find({ owner: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(resources);
  } catch (error) {
    console.error("getMyResources error:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET /api/resources — Public, all users browse resources
exports.getAllResources = async (req, res) => {
  try {
    const { category, search } = req.query;

    let filter = { isAvailable: true };

    if (category && category !== "All") {
      filter.category = category;
    }

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    const resources = await Resource.find(filter)
      .populate("owner", "name email") // seller ka naam & email
      .sort({ createdAt: -1 });

    res.json(resources);
  } catch (error) {
    console.error("getAllResources error:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET /api/resources/:id — Single resource detail
exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id).populate(
      "owner",
      "name email"
    );

    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    res.json(resource);
  } catch (error) {
    console.error("getResourceById error:", error);
    res.status(500).json({ message: error.message });
  }
};