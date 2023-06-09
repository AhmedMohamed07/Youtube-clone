import { IconButton, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        borderRadius: '20',
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
      onSubmit={submitHandler}
    >
      <input
        placeholder="search..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ color: 'red', p: '10px' }}>
        <Search></Search>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
