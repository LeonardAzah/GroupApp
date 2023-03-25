import React from "react";
import { Avatar, Typography, Box, Card } from "@mui/material";
import styled from "@emotion/styled";

const StyledCard = styled((props) => <Card {...props} />)(({ theme }) => ({
  borderRadius: "0.5rem",
  backgroundColor: "#1A2036",
  boxShadow: " 0px 10px 25px -15px #111628",
  width: "173px",
  height: "208px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const titleStyle = {
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "22px",
  textAlign: "center",
  color: "#B1B9D8",
  paddingTop: "1rem",
};

const numberStyle = {
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  textAlign: "center",
  color: "#B1B9D8",
};

const PlainCard = (props) => {
  const { img, title, number } = props;
  return (
    <StyledCard elevation={2}>
      <Box>
        <Box>
          <Avatar sx={{ width: "72px", height: "72px" }} src={img} />
        </Box>
        <Box>
          <Typography variant="body1" sx={titleStyle}>
            {title}
          </Typography>
          <Typography variant="body2" sx={numberStyle}>
            {number}
          </Typography>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default PlainCard;
