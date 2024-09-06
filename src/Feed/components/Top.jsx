import React from "react";
import { Box, Typography } from "@mui/material";

import NameAvatar from "../../Shared/NameAvatar";

const Top = () => {
  return (
    <Box
      padding={6}
      marginTop={2}
      marginBottom={2}
      borderRadius={2}
      border="2px solid #EBEBEB"
    >
      <Typography gutterBottom variant="h5" textTransform="uppercase">
        Top Contributers
      </Typography>
      <hr />
      <NameAvatar subtitle="320 Votes" />

      <NameAvatar subtitle="320 Votes " />
      <NameAvatar subtitle="320 Votes " />
      <NameAvatar subtitle="320 Votes" />
    </Box>
  );
};

export default Top;
