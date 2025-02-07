// src/app/components/JobForm/JobForm.tsx  
import { Job } from "@/types/job";  
import React from "react";  
import { useForm, SubmitHandler } from "react-hook-form";  
import { TextField, Button, Box, Paper } from "@mui/material";  

interface JobFormProps {  
  onJobAdded: (job: Job) => void;
  onClose:()=>void  
}  

const JobForm: React.FC<JobFormProps> = ({ onJobAdded,onClose }) => {  
  const { register, handleSubmit,reset } = useForm<Job>();  

  const onSubmit: SubmitHandler<Job> = (data) => {  
    onJobAdded(data);  
    reset();
    onClose() 
  };  

  return (  
    <Paper elevation={3} style={{ padding: '16px', maxWidth: '600px', margin: '20px auto' }}>  
      <form onSubmit={handleSubmit(onSubmit)}>  
        <Box display="flex" flexDirection="column" gap={2}>  
          <TextField  
            {...register("title", { required: true })}  
            label="Job Title"  
            variant="outlined"  
            fullWidth  
          />  
          <TextField  
            {...register("category", { required: true })}  
            label="Category"  
            variant="outlined"  
            fullWidth  
          />  
          <Button type="submit" variant="contained" color="primary" fullWidth>  
            Add Job  
          </Button>  
        </Box>  
      </form>  
    </Paper>  
  );  
};  

export default JobForm;