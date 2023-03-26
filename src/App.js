import { useState } from "react";
import { Box, Stack, Drawer } from "@mui/material";
import SideBar from "./components/SideBar";
import Display from "./pages/Display";
import { colors } from "./util";

const drawerWidth = "95px";

const SideBarStyle = {
  background: "#1A2036",
  width: "88px",
  borderRadius: "20px",
  display: { xs: "none", md: "flex" },
  alignItems: "center",
};
const SideBarToggle = {
  background: "#1A2036",
  width: "88px",
  height: "100%",
  margin: "auto",
  borderRadius: "20px",
  display: { xs: "flex", md: "none" },
  alignItems: "center",
};
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box
      sx={{
        background: "#252B42",
        // width: "865px",
        width: "56%",
        display: "flex",
        padding: "2rem",
        margin: "auto",
        marginY: "2rem",
        borderRadius: "20px",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#252B42",
            },
          }}
        >
          <SideBar sx={SideBarToggle} />
        </Drawer>

        <SideBar sx={SideBarStyle} />

        <Display onClick={handleDrawerToggle} />
      </Stack>
    </Box>
  );
}

export default App;
