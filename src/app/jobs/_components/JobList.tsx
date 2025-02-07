"use client";

import { getDetaildJobsApi, getJobsApi } from "@/services/jobServices";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import React, { useCallback, useEffect, useState } from "react";
import { useJobContext } from "@/context/JobContext";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "@/context/AuthContext";
import { Category, Job } from "@/types/job";
import Modal from "@/components/Modal";
import JobForm from "./JobForm";
import JobCard from "./JobCard";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Container,
  Paper,
  useMediaQuery,
} from "@mui/material";

const JobList: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const { jobs, setJobs } = useJobContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { user, logout } = useAuth();
  const theme = useTheme();

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const jobs: Job[] = !user
        ? await getJobsApi()
        : await getDetaildJobsApi();
      const jobsWithBookmark = jobs.map((job) => ({
        ...job,
        isBookmarked: false,
      }));
      setJobs(jobsWithBookmark);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddJob = useCallback(
    (newJob: { title: string; category: Category }) => {
      const newJobEntry: Job = {
        id: Date.now(),
        title: capitalizeFirstLetter(newJob.title),
        category: { id: Date.now(), name: newJob.category.name },
        datePosted: new Date().toISOString(),
        isBookmarked: false,
      };
      setJobs((prevJobs: Job[]) => [...prevJobs, newJobEntry]);
    },
    [setJobs]
  );

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ padding: 2, maxWidth: 1200, margin: "0 auto" }}>
      {user && (
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Welcome, {user?.name}
          </Typography>
          <Button onClick={logout}>Logout</Button>
        </Container>
      )}

      <Typography variant="h4" gutterBottom align="center">
        Job Listings
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <TextField
          label="Search Jobs"
          variant="outlined"
          onChange={handleSearch}
          fullWidth
          margin="normal"
        />
        <Button
          onClick={() => setOpenModal(true)}
          variant="contained"
          sx={{
            width: isMobile ? "100%" : "20%",
          }}
        >
          Add job
        </Button>
      </Paper>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        {loading && jobs.length === 0 && <CircularProgress />}
      </Container>
      {jobs.length !== 0 && filteredJobs.length === 0 ? (
        <div>Not found!</div>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
            padding: 2,
          }}
        >
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Box>
      )}

      <Modal
        title="Add job"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <JobForm
          onJobAdded={handleAddJob}
          onClose={() => setOpenModal(false)}
        />
      </Modal>
    </Box>
  );
};

export default JobList;
