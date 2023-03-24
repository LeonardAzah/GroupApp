import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  textTransform: "none",
  boxShadow: "none",
  height: 40,
  fontSize: "1.2rem",
  paddingX: "2rem",
}));

const PlainButton = ({ ...props }) => {
  return <StyledButton {...props}>{props.btnText}</StyledButton>;
};

export default PlainButton;
