"use client";

import { Button, Container, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

function NotFound() {
  const moveBack = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <div style={{ height: "100vh" }}>
      <Container maxWidth="lg" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
        <Typography variant="h4" component="h1" color="textSecondary" gutterBottom>
          The page you were looking for was not found.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={moveBack}
          startIcon={<ArrowBack />}
        >
          Back
        </Button>
      </Container>
    </div>
  );
}

export default NotFound;