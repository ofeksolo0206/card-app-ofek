import { Button } from "@mui/material";
import React from "react";
import { memo } from "react";

export default memo(function MyButton({ label, func }) {
  return (
    <Button variant="contained" onClick={func}>
      {label.data}
    </Button>
  );
});
