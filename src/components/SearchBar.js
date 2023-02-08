import { TextField } from "@mui/material";
import React, { useRef } from "react";

export const SearchBar = ({ searchText }) => {
  const searchRef = useRef();

  return (
    <div className="search-bar">
      <TextField
        id="standard-search"
        label="Search"
        type="search"
        variant="standard"
        ref={searchRef}
      />
    </div>
  );
};
