import React from "react";
import { useTheme } from "../../providers/ThemeProvider";

export default function SecondComponent() {
const {isDark} = useTheme();

  return <div style={{color : isDark && "white"}}>second Component</div>;
}
