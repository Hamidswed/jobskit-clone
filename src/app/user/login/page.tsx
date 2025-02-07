// src/app/login/page.tsx  

"use client";  

import { Container, Box } from "@mui/material";  
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {  
  return (  
    <Container maxWidth="xs" sx={{ mt: 8 }}>  
      <Box  
        sx={{  
          p: 3,  
          backgroundColor: 'background.paper',  
          borderRadius: 2,  
          boxShadow: 3,  
          textAlign: 'center',  
        }}  
      >  
        <LoginForm />  
      </Box>  
    </Container>  
  );  
};  

export default LoginPage;