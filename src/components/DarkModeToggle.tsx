import { Brightness4, Brightness7 } from "@mui/icons-material";  
import { useTheme } from "@/context/ThemeContext";
import { IconButton } from "@mui/material";  

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();  
  return (  
    <IconButton onClick={toggleDarkMode} color="inherit">  
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}  
    </IconButton>  
  );  
};  

export default DarkModeToggle;