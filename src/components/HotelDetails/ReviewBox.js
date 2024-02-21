import React from "react";
import { Container, Typography, Grid, Paper, Rating, Box } from "@mui/material";

const reviews = [
  {
    id: 1,
    author: "John Doe",
    date: "February 14, 2024",
    rating: 4.5,
    numericRating: 9, // Numeric rating in the range of 1 to 10
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod justo ut enim tincidunt, nec tincidunt augue malesuada.",
  },
  {
    id: 2,
    author: "Jane Smith",
    date: "February 15, 2024",
    rating: 5,
    numericRating: 10, // Numeric rating in the range of 1 to 10
    content:
      "Integer vitae risus sit amet nisi vehicula luctus. Ut id laoreet mauris, et fermentum orci. Sed efficitur vel mauris vitae ultricies.",
  },
  // Add more reviews as needed
];

const getRatingLabel = (numericRating) => {
  if (numericRating >= 9) {
    return "Perfect";
  } else if (numericRating >= 7) {
    return "Good";
  } else if (numericRating >= 5) {
    return "Better";
  } else {
    return "Worst";
  }
};

const ReviewBox = ({ author, date, rating, numericRating, content }) => {
  const ratingLabel = getRatingLabel(numericRating);

  return (
    <Grid item xs={12} className="">
      <Paper elevation={3} style={{ padding: "16px", minHeight: "200px" }}>
        <Typography variant="h6">{author}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {date}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {ratingLabel} - {numericRating}/10
        </Typography>
        <Rating value={rating} precision={0.5} readOnly />
        <Box mt={2}>
          <Typography variant="body1">{content}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

const ReviewsPage = () => {
  return (
    <Container className="p-0 " style={{ marginTop: "40px" }}>
      <p variant="h4" align="center" className="mb-4 font-bold text-2xl" gutterBottom>
        Customer Reviews
      </p>
      <Grid container spacing={3}>
        {reviews.map((review) => (
          <ReviewBox key={review.id} {...review} />
        ))}
      </Grid>
    </Container>
  );
};

export default ReviewsPage;
