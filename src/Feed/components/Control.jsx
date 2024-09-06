import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Control = () => {
  return (
    <Box
      padding={6}
      marginTop={2}
      marginBottom={2}
      borderRadius={2}
      border="2px solid #EBEBEB"
    >
      <Typography variant="h5" textTransform="uppercase">
        Control panel
      </Typography>
      <hr />
      <Box
        sx={{ height: 60, width: "100%" }}
        borderRadius={2}
        component={Button}
        variant="contained"
        marginBottom={2}
      >
        <Typography variant="h6">My Timeline</Typography>
      </Box>
      <Box
        sx={{ height: 60, width: "100%" }}
        borderRadius={2}
        component={Button}
        variant="contained"
        marginBottom={2}
      >
        <Typography variant="h6">recent posts</Typography>
      </Box>
      <Box
        sx={{ height: 60, width: "100%" }}
        borderRadius={2}
        component={Button}
        variant="contained"
        marginBottom={2}
      >
        <Typography variant="h6">My profile</Typography>
      </Box>
      <Box
        sx={{ height: 60, width: "100%" }}
        borderRadius={2}
        component={Button}
        variant="contained"
        marginBottom={2}
      >
        <Typography variant="h6">Vote</Typography>
      </Box>
    </Box>
  );
};

export default Control;
