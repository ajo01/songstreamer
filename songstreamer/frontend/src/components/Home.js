import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Grid, Typography, ButtonGroup } from "@material-ui/core";

import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

const Home = () => {
// const onSaveRoomData

  const renderHomePage = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Song Streamer
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {renderHomePage()}
        </Route>
        <Route path="/join" component={JoinRoom} />
        <Route path="/create" component={CreateRoom} />
      </Switch>
    </Router>
  );
};

export default Home;
