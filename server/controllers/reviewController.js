const Review = require("../models/Review");

exports.getReviewsByBook = async (req, res) => {
  const reviews = await Review.find({ bookId: req.query.bookId }).populate("userId", "name");
  res.json(reviews);
};

exports.createReview = async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
};
