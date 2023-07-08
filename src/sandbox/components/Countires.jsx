
import { Avatar, Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";

export default function Countires() {
  const [countries, setCountries] = useState();
const {isDark} = useTheme();

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      {countries
        ? countries.map((country) => (
            <Box
              display="flex"
              sx={{ justifyContent: "space-between" }}
              key={JSON.stringify(country)}
            >
              <Avatar
                src={country.flags.png}
                alt={`${country.name.common} flag`}
              />
              <Typography sx={{ width: "150px", color: isDark && "white"}}>
                {country.name.common}
              </Typography>
              <Typography sx={{ width: "150px" , color: isDark && "white"}}>
                {country.capital?.[0]}
              </Typography>
            </Box>
          ))
        : null}
    </div>
  );
}


