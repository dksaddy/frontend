import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";

import Wall from "../components/Wall";
import User from "../components/User";
import Search from "../components/Search";
import Top from "../components/Top";
import Control from "../components/Control";

const FeedHome = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <User />
          <Control />
        </Grid>
        <Grid item xs={6}>
          <Wall />
        </Grid>
        <Grid item xs={3}>
          <Search />
          <Top />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeedHome;
