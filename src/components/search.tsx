import { SearchOutlined } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { ChangeEvent, ReactElement } from "react";
import { useSearch } from "../hooks/search";

function Search(): ReactElement {
  const { query, onQueryChange, search } = useSearch();
  return (
    <>
      <TextField
        label="Search"
        variant="standard"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onQueryChange(e.currentTarget.value);
        }}
      />
      <IconButton
        type="button"
        onClick={() => {
          // More checks here
          search();
        }}
      >
        <SearchOutlined />
      </IconButton>
    </>
  );
}

export default Search;
