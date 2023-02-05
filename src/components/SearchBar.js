import { TextField } from "@mui/material";
import React from "react";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <TextField
        id="standard-search"
        label="Search"
        type="search"
        variant="standard"
      />
    </div>
  );
};
