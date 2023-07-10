import { Button, Typography } from "@mui/material";
import React from "react";
import useCounter from "../hooks/useCounter";
import { useTheme } from "../../providers/ThemeProvider";

export default function MyCounter() {
  const { counter, inc, dec, reset } = useCounter(5);
  const {isDark} = useTheme();
  return (
    <div>
      <Button variant="contained" onClick={inc}>
        +
      </Button>
      <Button variant="contained" onClick={dec}>
        -
      </Button>
      <Button variant="contained" onClick={reset}>
        reset
      </Button>
      <Typography sx={{color : isDark && "white"}}>{counter}</Typography>
    </div>
  );
}
