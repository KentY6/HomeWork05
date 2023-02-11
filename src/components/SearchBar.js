import { TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ reorderWithSearch }) => {
  const [searchWord, setSearchWord] = useState("");

  const getInputText = (e) => {
    e.preventDefault();
    reorderWithSearch(searchWord);
    // setSearchWord("");
  };

  return (
    <div className="search-bar">
      <form className="search-field" onSubmit={getInputText}>
        <TextField
          id="standard-search"
          label="Search"
          type="search"
          variant="standard"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <div className="search-icon" onClick={getInputText}>
          <SearchIcon />
        </div>
      </form>
    </div>
  );
};
