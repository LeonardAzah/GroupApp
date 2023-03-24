import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const SideBar = () => {
  return (
    <Box
      sx={{
        background: "#1A2036",
        // position: "absolute",
        width: "88px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MessageOutlinedIcon sx={{ color: "#7f88a9" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <PeopleAltOutlinedIcon sx={{ color: "#7f88a9" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AcUnitIcon sx={{ color: "#7f88a9" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SettingsOutlinedIcon sx={{ color: "#7f88a9" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
