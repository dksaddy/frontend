import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";

import NameAvatar from "../../Shared/NameAvatar";
import { AuthContext } from "../../Auth/AuthContext";
import SmallDetails from "./SmallDetails";

const User = () => {
  const auth = useContext(AuthContext);
  return (
    <Box
      padding={6}
      marginTop={2}
      marginBottom={2}
      borderRadius={2}
      border="2px solid #EBEBEB"
    >
      <NameAvatar
        src={`http://localhost:3000/${auth.profilePicture}`}
        name={auth.name}
        subtitle={`@nadibahsan`}
      />
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SmallDetails title="post" content="12" />
        </Grid>
        <Grid item xs={6}>
          <SmallDetails title="Comments" content="50" />
        </Grid>
        <Grid item xs={6}>
          <SmallDetails title="Reactions" content="500" />
        </Grid>
        <Grid item xs={6}>
          <SmallDetails title="rank" content="Fresher" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default User;
