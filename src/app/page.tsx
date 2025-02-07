import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container
      maxWidth="sm" // تعیین حداکثر عرض
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", // قرار دادن در وسط صفحه
        padding: "16px", // فاصله مناسب
      }}
    >
      <Box
        sx={{
          p: 3,
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center", // مرکزچینی متن در باکس
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          Welcome to JobsKit Clone
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" } }}
        >
          <Link href="/user/login">Login</Link> to access job listings.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" } }}
        >
          <Link href="/jobs">Jobs</Link> to access job listings.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
