import React, { useState } from "react";
import "../../index.css";
import "../../navbar.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };



  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Home", onClick: () => scrollToSection("home") },
    { label: "AI Services", onClick: () => scrollToSection("ai") },
    { label: "Projects", onClick: () => scrollToSection("projects") }
  ];

  return (
    <>
      <div className="nav">
        <ThemeProvider theme={theme}>
          <Box className="main-container sticky">
            <AppBar
              position="static"
              className="custom-app-bar"
            >
              <Toolbar className="custom-toolbar">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  border="inherit 2px solid"
                  sx={{
                    mr: 2,
                    mt: 1,
                    display: { xs: "block", sm: "none", md: "none" },
                    color: "var(--white)", // hamburguesa
                    backgroundColor: "black", // fondo btn hamburguesa
                    borderRadius: "30%",
                    padding: "10px 9px 4px 9px",
                    "&:hover": {
                      backgroundColor: "var(--color3)",
                    },
                  }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Box
                  className="button-container"
                  sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
                >
                  {menuItems.map((item) => (
                    <Button
                      key={item.label}
                      className="custom-button"
                      onClick={item.onClick}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: "100%",
                maxHeight: "100%",
                backgroundColor: "black",
              },
            }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.label}
                  onClick={() => {
                    item.onClick();
                    toggleDrawer(false)();
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{ color: "var(--white)", textAlign: "center" }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </ThemeProvider>
      </div>
    </>
  );
}

export default Navbar;
