// app/components/ThemeAwareLayout.tsx
import { useTheme } from "@/context/ThemeContext";
import { CssBaseline, Theme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/styles/theme";

const ThemeAwareLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeAwareLayout;
