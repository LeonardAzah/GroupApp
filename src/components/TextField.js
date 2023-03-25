import React from "react";
import { FormControl, OutlinedInput } from "@mui/material";
const TextField = (props) => {
  const { placeholder } = props;
  return (
    <div>
      <FormControl
        sx={{
          background: "rgba(255, 255, 255, 0.9)",
          border: "2px solid #FFFFFF",
          borderRadius: "10px",
          boxSizing: "border-box",
          marginY: "0.5rem",
          textAlign: "center",
          width: "100%",
          "&.MuiInputBase-input": {
            fontFamily: "Merriweather",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "18px",
            color: "#111628",
          },
        }}
      >
        <OutlinedInput placeholder={placeholder} />
      </FormControl>
    </div>
  );
};

export default TextField;
