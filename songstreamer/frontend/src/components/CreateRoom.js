import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {generateRandomCode} from '../api/index'

const CreateRoom = () => {
  const defaultVotes = "2";
  const [votes, setVotes] = useState(defaultVotes);
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [isHost, setIsHost] = useState(true);

  const handleVotesChange = (e) => {
    setVotes(e.target.value);
  };

  const handleGuestCanPause = (e) => {
    setGuestCanPause(e.target.value);
  };

  const handleCreateRoom = () => {
    const roomData = {
      roomCode: generateRandomCode(),
      isHost,
      votes,
      guestCanPause,
      date: new Date()
  }
  // props.onSaveRoomData(roomData)

    console.log(votes + ' ' + guestCanPause)
    console.log(roomData)
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create A Room
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <div align="center">
            <FormHelperText>Guest Control of Playback State</FormHelperText>
          </div>

          <RadioGroup row defaultValue="true" onChange={handleGuestCanPause}>
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="false"
              control={<Radio color="secondary" />}
              label="No Control"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required={true}
            type="number"
            onChange={handleVotesChange}
            defaultValue={defaultVotes}
            inputProps={{
              min: 1,
              style: { textAlign: "center" },
            }}
          />

          <div align="center">
            <FormHelperText>Votes Required To Skip Song</FormHelperText>
          </div>
        </FormControl>
      </Grid>

      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained" onClick={handleCreateRoom}>
          Create A Room
        </Button>
      </Grid>

      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateRoom;
