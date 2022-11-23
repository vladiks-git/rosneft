import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './style.scss';

export default function DenseAppBar({ onOpenNavigation }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ bgcolor: 'rgba(255,211,1)' }}>
        <div className='header__inner'>
          <Toolbar variant='dense'>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2, color: '#000' }}
              onClick={onOpenNavigation}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              color='inherit'
              component='div'
              sx={{ color: '#000' }}
            >
              Rosneft Health
            </Typography>
          </Toolbar>
          <p>Иванов И.И.</p>
        </div>
      </AppBar>
    </Box>
  );
}
