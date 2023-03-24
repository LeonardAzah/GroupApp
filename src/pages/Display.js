import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import PlainCard from "../components/PlainCard";
import { colors } from "../util";
import AddCard from "../components/AddCard";
import Modal from "../components/Modal";
import cusine from "../images/cusine.jpg";
import arts from "../images/arts.jpg";
import workout from "../images/workout.jpg";
import game from "../images/game.jpg";
import hiking from "../images/hiking.jpg";
import yoga from "../images/yoga.jpg";
const Display = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ display: "flex", fontWeight: 700, fontSize: "26px" }}
          >
            <ArrowBackOutlinedIcon sx={{ color: "#7f88a9" }} /> Groups
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            border: "2px solid #1A2036",
            borderRadius: "5px",
          }}
        >
          <Box sx={{ background: colors.background, padding: "0.2rem" }}>
            <GridViewOutlinedIcon sx={{ color: "#7f88a9" }} />
          </Box>
          <Box sx={{ padding: "0.2rem" }}>
            <SplitscreenOutlinedIcon sx={{ color: "#7f88a9" }} />
          </Box>
        </Box>
      </Grid>{" "}
      <Grid item xs={12} sm={4} md={3}>
        <AddCard onClick={handleShowModal} />
        <Box>
          {showModal && <Modal show={showModal} onClose={handleCloseModal} />}
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <PlainCard title="Cusine" number="36 members" img={cusine} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <PlainCard title="Art" number="9 members" img={arts} />{" "}
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <PlainCard title="Workout" number="27 members" img={workout} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <PlainCard title="Gaming" number="105 members" img={game} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <PlainCard title="Hiking" number="97 members" img={hiking} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <PlainCard title="Yoga" number="65 members" img={yoga} />
      </Grid>
    </Grid>
  );
};

export default Display;
