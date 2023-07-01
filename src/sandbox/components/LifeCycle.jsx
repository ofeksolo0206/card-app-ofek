import React, { useState, useEffect } from "react";
import { useTheme } from "../../providers/ThemeProvider";

const Counter = () => {
  const [count, setCount] = useState(0);
  const {isDark} = useTheme();
  const increase = () => {
    setCount(prevCount => {
      const newCount = Number(prevCount) + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  const decrease = () => {
    setCount(prevCount => {
      const newCount = Number(prevCount) - 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  useEffect(() => {
    const initialValue = localStorage.getItem("count");
    if (initialValue) setCount(initialValue);
  }, []);

  return (
    <div>
      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
      <div style={{color : isDark && "white"}}>{count}</div>
    </div>
  );
};

export default Counter;