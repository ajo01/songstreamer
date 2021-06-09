import React, { useState } from "react";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Room from './Room'

const JoinRoom = (props) => {
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState();

  const handleTextFieldChange = (e) => {
    setRoomCode(e.target.value);
  };

  const roomButtonPressed = () => {
    console.log('clicked!')

    // if (roomCode !== "") {
    //   props.history.push(`/room/${roomCode}`);
    // } else {
    //   setError({ error: "Room not found." });
    // }
  }

  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Join A Room
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={error}
          label="Code"
          placeholder="Enter a room code"
          value={roomCode}
          helperText={error}
          variant="outlined"
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={roomButtonPressed}>
          Enter Room
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default JoinRoom;
