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
import { generateRandomCode } from "../api/index";

const CreateRoom = (props) => {
  const defaultVotes = "2";
  const [votes, setVotes] = useState(defaultVotes);
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [roomCode, setRoomCode] = useState("");
  const [roomData, setRoomData] = useState(null);

  const handleVotesChange = (e) => {
    setVotes(e.target.value);
  };

  const handleGuestCanPause = (e) => {
    setGuestCanPause(e.target.value);
  };

  const handleCreateRoom = () => {
    setRoomCode(generateRandomCode());
    const newRoomData = {
      roomCode: roomCode,
      isHost: true,
      votes,
      guestCanPause,
      date: new Date(),
    };
    setRoomData(newRoomData);
    // props.onSaveRoomData(roomData)

    console.log(newRoomData);
  };

  const handleRoomButtonPressed = () => {
    console.log("handle room btn pressed");
  };

  const handleUpdateButtonPressed = () => {
    console.log("handle update btn pressed");
  };

  const renderCreateButtons = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={handleRoomButtonPressed}
          >
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

  const renderUpdateButtons = () => {
    return (
      <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={handleUpdateButtonPressed}
        >
          Update Room
        </Button>
      </Grid>
    );
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
        {props.updatePage ? 'Update Room' : 'Create a Room' }
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            <div align="center">Guest Control of Playback State</div>
          </FormHelperText>

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
      {props.updatePage? renderUpdateButtons() : renderCreateButtons()}
    </Grid>
  );
};

export default CreateRoom;
