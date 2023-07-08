import { Divider, Typography } from "@mui/material";
import { string } from "prop-types";
import React from "react";
import { useTheme } from "../providers/ThemeProvider";

export default function PageHeader({ title, subtitle }) {
  const {isDark} = useTheme();
  return (
    <>
      <Typography variant="h2" component="h1" sx={{color: isDark ? "white" : "black"}}>
        {title}
      </Typography>
      <Typography variant="h5" component="h2" sx={{color: isDark ? "white" : "black"}}>
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2}} />
    </>
  );
}

PageHeader.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};

