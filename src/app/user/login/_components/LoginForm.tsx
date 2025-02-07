
import { Button, TextField, Box, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginApi } from "@/services/authServices";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import React from "react";

// Validation schema
const schema = yup.object().shape({
  identifier: yup.string().required("Email or phone number is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async ({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }) => {
    try {
      const user = await loginApi({identifier, password})
      login(user);
      toast.success("Login successful!");
      router.push("/jobs"); // Redirect to job listings
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email or Phone Number"
        {...register("identifier")}
        error={!!errors.identifier}
        helperText={errors.identifier?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
