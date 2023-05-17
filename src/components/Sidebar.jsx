import { Stack } from '@mui/material';
import React from 'react';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      // direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { xs: 'row', md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && '#fc1530',
            color: 'white',
          }}
        >
          <span
            style={{
              paddingRight: '15px',
              color: category.name === selectedCategory ? 'white' : 'red',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? '1' : '.7' }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
