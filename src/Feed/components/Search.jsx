import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
const Search = () => {
  return (
    <Box
      padding={6}
      marginTop={2}
      marginBottom={2}
      borderRadius={2}
      border="2px solid #EBEBEB"
    >
      <Typography variant="h5" gutterBottom textTransform="uppercase">
        Find Topics
      </Typography>
      <TextField variant="outlined" placeholder="Topic" fullWidth />

      <Button sx={{ marginTop: 2 }} variant="contained" fullWidth>
        Search
      </Button>
    </Box>
  );
};

export default Search;
