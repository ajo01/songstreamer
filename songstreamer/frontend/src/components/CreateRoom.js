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

const CreateRoom = () => {
  const defaultVotes = 2;

  return (
    <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
              Create A Room
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <FormControl component="fieldset">
              <FormHelperText>
                <div align="center">Guest Control of Playback State</div>
              </FormHelperText>
              <RadioGroup
                row
                defaultValue="true"
                // onChange={this.handleGuestCanPauseChange}
              >
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
                // onChange={this.handleVotesChange}
                // defaultValue={this.defaultVotes}
                inputProps={{
                  min: 1,
                  style: { textAlign: "center" },
                }}
              />
              <FormHelperText>
                <div align="center">Votes Required To Skip Song</div>
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              color="primary"
              variant="contained"
            //   onClick={this.handleRoomButtonPressed}
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

export default CreateRoom;
