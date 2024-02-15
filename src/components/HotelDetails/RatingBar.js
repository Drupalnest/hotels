import React from "react";
import { Typography, Box, LinearProgress, Container, Grid } from "@mui/material";

const RatingBar = ({ title, rating }) => {
  return (
    <Box sx={{ mb: 4, width: "100%" }}>
      <Typography  mb={2} fontWeight="bold" sx={{ fontSize: { xs: "subtitle1",  } }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ flex: 1, mr: 2 }}>
          <LinearProgress
            variant="determinate"
            value={rating * 10}
            sx={{ height: 10, borderRadius: 5 }}
            className=""
          />
        </Box>
        <Typography variant="body1" fontWeight="bold">
          {rating}
        </Typography>
      </Box>
    </Box>
  );
};

const RatingSection = () => {
  return (
    <Container maxWidth="lg"  className="p-0" sx={{ mt: 4 }} >
   <h1 className="py-2 py-3 text-2xl font-bold mb-4 ">1788 Verified Guest Ratings</h1>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={3}>
          <RatingBar title="Guest Rating" rating={8.7} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <RatingBar title="CLEANLINESS" rating={9.2} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <RatingBar title="ANOTHER CATEGORY" rating={9.2} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <RatingBar title="YET ANOTHER CATEGORY" rating={8.8} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RatingSection;
