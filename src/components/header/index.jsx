import React from "react";

import { Button, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ px: 4 }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      {/* <img src="../../assets/logo.jpg" alt="Logo" /> */}
      <Typography variant="h5">Роснефть</Typography>
      <Button variant="contained">fewfwefwefwefwefffe</Button>
    </Stack>
  );
}

export default Header;
