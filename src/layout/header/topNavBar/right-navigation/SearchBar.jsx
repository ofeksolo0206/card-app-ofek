import React from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../../../../providers/ThemeProvider"
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => {
    const {isDark} = useTheme();
    const [searchParams,setSearch] = useSearchParams();
    const handleChange = ({target}) => setSearch({q: target.value});

    return (
        <Box display="inline-flex">
            <FormControl variant="standard">
                <OutlinedInput
                sx={{backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
                placeholder="search"
                size="small"
                value={searchParams.get("q") ?? ""}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton edge="end">
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>
        </Box>
    )
}

export default SearchBar;