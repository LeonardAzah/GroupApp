import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import TextField from "./TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PlainButton from "./PlainButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import workout from "../images/workout.jpg";

const Modal = (props) => {
  const { onClose } = props;

  return (
    <Box
      sx={{
        background: "rgba(37, 43, 66, 0.84)",
        borderRadius: "25px",
        position: "absolute",
        width: "70%",
        top: 60,
        left: 180,
        right: 800,
        padding: "1rem",
        zIndex: 999,
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Avatar
          sx={{
            bgcolor: "#040404",
            width: "50px",
            height: "45px",
            color: "#808FBE",
          }}
          component={Button}
          onClick={onClose}
        >
          <CloseOutlinedIcon />
        </Avatar>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Merriweather",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "30px",

            color: "#FFFFFF",
          }}
        >
          New Group
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <TextField placeholder="Group Name" fullWidth />
        <TextField placeholder="Total Members" fullWidth />
      </Box>
      <Box>
        <Box sx={{ display: "flex", marginRight: "25px" }}>
          <Box
            sx={{
              width: "300px",
              background: "rgba(0, 0, 0, 0.9)",
              border: "2px solid #FFFFFF",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <Box sx={{ paddingTop: "1.5rem", textAlign: "center" }}>
              <CloudUploadIcon
                sx={{
                  width: "96px",
                  height: "64px",
                  color: "#FFFFFF",
                  alignItems: "center",
                }}
              />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  paddingY: "0.5rem",
                  alignItems: "center",
                }}
              >
                Upload Group Image
              </Typography>
            </Box>
          </Box>
          <Box>
            <Avatar sx={{ width: "190px", height: "190px" }} src={workout} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <PlainButton btnText="Save" sx={{ background: "#28B683" }} />
      </Box>
    </Box>
  );
};

export default Modal;
