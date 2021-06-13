import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Grid, Typography, ButtonGroup } from "@material-ui/core";

import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import Room from './Room'

const Home = () => {
  const [roomCode, setRoomCode] = useState('ABCDE')

// const onSaveRoomData

const clearRoomCode = () => {
  setRoomCode('')
}

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

        <Route
            path="/room/:roomCode"
            render={(props) => {
              return <Room {...props} leaveRoomCallback={clearRoomCode} />;
            }}
          />
      </Switch>
    </Router>
  );
};

export default Home;
