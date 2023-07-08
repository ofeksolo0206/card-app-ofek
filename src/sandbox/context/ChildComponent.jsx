import React from "react";
import { useData } from "./DataProvider";
import { useTheme } from "../../providers/ThemeProvider";

export default function ChildComponent() {
  const data = useData();
  const {isDark} = useTheme();
  
  return <div style={{color : isDark && "white"}} >Hello {data.name}</div>;
}
