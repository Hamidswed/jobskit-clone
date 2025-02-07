"use client";  

import LoginForm from "./_components/LoginForm";
import { Container, Box } from "@mui/material";  

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