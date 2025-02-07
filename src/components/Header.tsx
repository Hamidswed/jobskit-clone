import { AppBar, Toolbar, Typography } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">Jobs Kit App</Link>
          </Typography>
          <DarkModeToggle />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
