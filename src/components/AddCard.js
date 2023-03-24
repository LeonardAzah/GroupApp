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
}));

const titleStyle = {
  fontFamily: "IBM Plex Sans",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  color: "#8795C5",
  paddingTop: "0.5rem",
};

const AddCard = (props) => {
  const { onClick } = props;
  return (
    <StyledCard elevation={2} component={Button} onClick={onClick}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              background: "#242B42",
              width: "56px",
              height: "56px",
            }}
          >
            <AddOutlinedIcon color="#808FBE" />
          </Avatar>

          <Typography variant="body1" sx={titleStyle}>
            Create Group
          </Typography>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default AddCard;
