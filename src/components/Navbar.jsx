import React from 'react';
import { AppBar, Stack, Toolbar } from '@mui/material';
import { logo } from '../utils/constants';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    // <AppBar>
    //   <Toolbar
    //     direction="row"
    //     alignitems="center"
    //     p={2}
    //     sx={{
    //       position: 'sticky',
    //       background: '#000',
    //       justifyContent: 'space-between',

    //       padding: '40',
    //     }}
    //   >
    //     <Link to="/">
    //       <img src={logo} alt="logo" height={45} />
    //     </Link>
    //     <SearchBar />
    //   </Toolbar>
    // </AppBar>
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
