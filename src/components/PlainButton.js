import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  textTransform: "none",
  boxShadow: "none",
  height: 40,
  fontFamily: "Merriweather",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  width: "127px",
  height: "58px",
}));

const PlainButton = ({ ...props }) => {
  return <StyledButton {...props}>{props.btnText}</StyledButton>;
};

export default PlainButton;
