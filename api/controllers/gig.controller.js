const Gig = require("../models/gig.model");
const createError = require("../utils/createError");

const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create gigs"));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch {}
};

const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return next(createError(404, "Gig not found"));
    }
    if (gig.userId !== req.userId) {
      return next(createError(403, "You can delete only your gigs"));
    }

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig deleted successfully");
  } catch (err) {
    next(err);
  }
};

const getGig = async (req, res, next) => {
  try {
  } catch {}
};

const getGigs = async (req, res, next) => {
  try {
  } catch {}
};

module.exports = {
  createGig,
  deleteGig,
  getGig,
  getGigs,
};
