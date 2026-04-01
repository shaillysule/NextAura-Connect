const Resource = require("../models/Resource");

// POST /api/resources — Seller adds a new resource
exports.addResource = async (req, res) => {
  try {
    const resource = new Resource({
      title: req.body.title,
      category: req.body.category,
      rentPerDay: req.body.rentPerDay,
      description: req.body.description,
      address: req.body.address,
      location: req.body.location,
      owner: req.user.id,
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
      .populate("owner", "name email")
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

// GET /api/resources/:id/recommend
exports.getRecommendedResources = async (req, res) => {
  try {
    const resourceId = req.params.id;

    const current = await Resource.findById(resourceId);

    if (!current) {
      return res.status(404).json({ message: "Not found" });
    }

    const allResources = await Resource.find({
      _id: { $ne: resourceId },
      isAvailable: true,
      // ✅ Pehle se sirf same category ke resources lo — DB level filter
      category: current.category,
    });

    const scored = allResources.map(item => {
      let score = 0;

      // Category match — ab guaranteed hai (DB filter se)
      score += 5;

      // ✅ Price similarity - 2x rentPerDay ke andar ho
      const currentPrice = current.rentPerDay;
      const itemPrice = item.rentPerDay;
      const priceDiff = Math.abs(itemPrice - currentPrice);
      const priceRatio = priceDiff / currentPrice;

      if (priceRatio <= 0.2) score += 4;       // 20% difference — almost same price
      else if (priceRatio <= 0.5) score += 3;  // 50% difference — close price
      else if (priceRatio <= 1.0) score += 1;  // 100% difference — acceptable
      // 100% se zyada diff = no price score

      // ✅ Title similarity
      const currentFirstWord = current.title.toLowerCase().split(" ")[0];
      if (item.title.toLowerCase().includes(currentFirstWord)) {
        score += 2;
      }

      // ✅ Same city bonus
      const currentAddr = current?.location?.address || "";
      const itemAddr = item?.location?.address || "";
      if (
        currentAddr &&
        itemAddr &&
        itemAddr.toLowerCase().includes(currentAddr.toLowerCase().split(",")[0])
      ) {
        score += 2;
      }

      return { ...item._doc, score };
    });

    scored.sort((a, b) => b.score - a.score);

    // ✅ Minimum score 5 chahiye (category match mandatory)
    const recommendations = scored
      .filter(item => item.score >= 5)
      .slice(0, 5);

    res.json(recommendations);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({ message: "Not found" });
    }

    if (resource.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await resource.deleteOne();

    res.json({ message: "Deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};