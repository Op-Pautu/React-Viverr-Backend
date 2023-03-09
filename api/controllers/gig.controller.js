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
  if (!req.isSeller)
    return next(createError(403, "Only sellers can delete gigs"));

  try {
  } catch {}
};

const getGig = async (req, res, next) => {
  try {
  } catch {}
};

const getGigs = async (req, res, next) => {
  try {
  } catch {}
};
