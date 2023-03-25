import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
} from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";

const SideBar = () => {
  return (
    <Box
      sx={{
        background: "#1A2036",
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
              <ChatOutlinedIcon sx={{ color: "#7f88a9" }} />
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
              <EggOutlinedIcon sx={{ color: "#7f88a9" }} />
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
