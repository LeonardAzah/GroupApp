import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import SideBar from "./components/SideBar";
import Display from "./pages/Display";

function App() {
  return (
    <Box
      sx={{
        background: "#252B42",
        width: "80%",
        // height: "600px",
        display: "flex",
        padding: "2rem",
        margin: "auto",
        marginY: "2rem",
        borderRadius: "20px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        // sx={{ width: "100%" }}
      >
        <SideBar />
        <Display />
      </Stack>
    </Box>
  );
}

export default App;
