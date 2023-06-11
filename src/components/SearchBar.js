import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search action using searchQuery value
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <form className={classes.root} onSubmit={handleSearch}>
      <TextField
        id="search-input"
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit" className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
    </form>
  );
};

export default SearchBar;