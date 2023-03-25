import { Avatar, Typography, Box, Card, Button } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const StyledCard = styled((props) => <Card {...props} />)(({ theme }) => ({
  borderRadius: "0.5rem",
  backgroundColor: "#2E3650",
  boxShadow: " 0px 10px 25px -15px #111628",
  width: "173px",
  height: "208px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const titleStyle = {
  fontFamily: "IBM Plex Sans",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  color: "#8795C5",
  boxShadow: " 0px 10px 25px -15px #111628",
  paddingTop: "0.5rem",
};

const AddCard = (props) => {
  const { onClick } = props;
  return (
    <StyledCard elevation={2}>
      <Box>
        <Avatar
          sx={{
            background: "#242B42",
            width: "56px",
            height: "56px",
          }}
          component={Button}
          onClick={onClick}
        >
          <AddOutlinedIcon
            sx={{
              color: "#808FBE",
              fontSize: "2.2rem",
            }}
          />
        </Avatar>

        <Typography variant="body1" sx={titleStyle}>
          Create Group
        </Typography>
      </Box>
    </StyledCard>
  );
};

export default AddCard;
