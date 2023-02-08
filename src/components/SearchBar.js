import { TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ reorderWithSearch }) => {
  const [searchText, setSearchText] = useState("");

  const getInputText = (e) => {
    e.preventDefault();
    if (searchText === "") return;
    reorderWithSearch(searchText);
    setSearchText("");
  };

  return (
    <div className="search-bar">
      <form className="search-field" onSubmit={getInputText}>
        <TextField
          id="standard-search"
          label="Search"
          type="search"
          variant="standard"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="search-icon" onClick={getInputText}>
          <SearchIcon />
        </div>
      </form>
    </div>
  );
};
