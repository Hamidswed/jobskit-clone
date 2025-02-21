"use client";

import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import ThemeAwareLayout from "@/components/ThemeAwareLayout";
import { lightTheme, darkTheme } from "@/styles/theme";
import { AuthProvider } from "@/context/AuthContext";
import { JobProvider } from "@/context/JobContext"
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import { ReactNode } from "react";
import "../styles/globals.css";


// A component to determine the theme
const ThemeWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkMode } = useTheme();
  return (
    <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </MUIThemeProvider>
  );
};

// Layout component to wrap the application
const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <Toaster />
            <AuthProvider>
              <ThemeWrapper>
                <ThemeAwareLayout>
                  <JobProvider>
                  <Header />
                  {children}
                  </JobProvider>
                </ThemeAwareLayout>
              </ThemeWrapper>
            </AuthProvider>
        </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
