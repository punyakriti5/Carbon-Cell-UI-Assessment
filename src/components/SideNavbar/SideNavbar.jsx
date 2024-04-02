import * as React from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Typography,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import "./SideNavbar.css";

const SideNavbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink to="/" className="navlink">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/about" className="navlink">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/contact" className="navlink">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermContactCalendarIcon />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );

  return (
    <>
    
      {/* {isMatch ? ( */}
        <div className="Navbar">
            <Typography variant="h6" fontWeight="medium" sx={{ ml:2, mr:2}}
          
           
          >
            Carbon Cell
          </Typography>
          <MenuIcon onClick={toggleDrawer("left", true)} />

          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </div>
      {/* ) : (<>

        <Drawer anchor={"left"} open={state["left"]} variant="permanent">
        <Typography variant="h6" fontWeight="medium" sx={{ m:2}}
           
          >
           
            Carbon Cell
          </Typography>
          <Divider/>
          {list("left")}
        </Drawer></>
      )} */}
    </>
  );
};

export default SideNavbar;

