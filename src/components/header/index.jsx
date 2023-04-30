import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from './logo.png';

import './style.scss';

export default function DenseAppBar({ onOpenNavigation }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'rgb(211 211 211)' }}>
        <div className="header__inner">
          <img className="header__logo" src={logo} alt="logo" />
          <Toolbar sx={{ flex: '1 0 auto' }}>
            <Typography
              color="inherit"
              component="div"
              sx={{ color: '#000', fontSize: '12px' }}
            >
              Роснефть дистанционная медицина
            </Typography>
          </Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#000' }}
            onClick={onOpenNavigation}
          >
            <MenuIcon />
          </IconButton>
          {/* <p className="person__fio">Трифанов П.И.</p> */}
        </div>
      </AppBar>
    </Box>
  );
}
