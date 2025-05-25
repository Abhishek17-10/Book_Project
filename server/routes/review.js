router.post('/', async (req, res) => {
  try {
    const { bookId, review, rating } = req.body;

    const newReview = new Review({
      book: bookId,
      content: review,
      rating,
    });

    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});
