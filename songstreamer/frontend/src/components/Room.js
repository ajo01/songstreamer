import React, { useState } from "react";
import { Button, Grid, Typography} from "@material-ui/core";

const Room = (props) => {
    const [roomCode, setRoomCode] = useState('ABCDE')
    const [votesToSkip, setVotesToSkip] = useState(2)
    const [guestCanPause, setGuestCanPause] = useState(false)
    const [isHost, setIsHost] = useState(true)
    const [showSettings, setShowSettings] = useState(false)

    
const leaveButtonPressed = () => {
    props.history.push("/");
}

const updateShowSettings = (val) => {
   setShowSettings(val)
  }

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
  }


return (
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
)
}

export default Room