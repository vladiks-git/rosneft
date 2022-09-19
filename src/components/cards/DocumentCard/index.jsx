import { Box, Stack, Typography } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import React from "react";

function DocumentCard() {
  return (
    <Box
      sx={{
        bgcolor: "rgba(255,211,1,0.4)",
        p: 2,
        borderRadius: 1.7,
        boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          pb: 1,
          borderBottom: 1,
          borderWidth: 2,
        }}
      >
        <TaskIcon />
        <Typography variant="h6">Снилс</Typography>
      </Stack>

      <Typography
        sx={{
          mt: 1,
          fontSize: 15,
        }}
      >
        123-456-789 00
      </Typography>
    </Box>
  );
}

export default DocumentCard;
