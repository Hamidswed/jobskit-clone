// context/JobContext.tsx
import { createContext, useState, useContext } from "react";
import { Job } from "@/types/job";

type JobContextType = {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  toggleBookmark: (jobId: number) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const toggleBookmark = (jobId: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, isBookmarked: !job.isBookmarked } : job
      )
    );
  };

  return (
    <JobContext.Provider value={{ jobs, setJobs, toggleBookmark }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};
