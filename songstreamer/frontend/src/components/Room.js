import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import CreateRoomPage from "./CreateRoom";

const Room = (props) => {
  const [roomCode, setRoomCode] = useState("ABCDE");
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);

  //set to false
  const [isHost, setIsHost] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const leaveButtonPressed = () => {
    props.leaveRoomCallback();
    props.history.push("/");
  };

  const updateShowSettings = (val) => {
    setShowSettings(val);
  };

  const renderSettings = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <CreateRoomPage
            update={true}
            votesToSkip={votesToSkip}
            guestCanPause={guestCanPause}
            roomCode={roomCode}
            //   updateCallback={getRoomDetails}
            updatePage={isHost}
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => updateShowSettings(false)}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    );
  };

  const renderSettingsButton = () => {
    return (
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateShowSettings(true)}
        >
          Settings
        </Button>
      </Grid>
    );
  };

  return (
    <div>
      {showSettings ? (
        renderSettings()
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography variant="h4" component="h4">
              Code: {roomCode}
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="h6" component="h6">
              Votes: {votesToSkip}
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="h6" component="h6">
              Guest Can Pause: {guestCanPause.toString()}
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="h6" component="h6">
              Host: {isHost.toString()}
            </Typography>
          </Grid>
          {isHost ? renderSettingsButton() : null}
          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={leaveButtonPressed}
            >
              Leave Room
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Room;
