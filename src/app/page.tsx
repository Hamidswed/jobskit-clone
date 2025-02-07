import { Box, Typography, Link, Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container
      maxWidth="sm" 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", 
        padding: "16px",
      }}
    >
      <Box
        sx={{
          p: 3,
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center", 
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
          <Link href="/user/login">Login</Link> to access the list of jobs.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },marginTop:"1rem" }}
        >
          <Link href="/jobs">Jobs</Link> to see the list of jobs.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
