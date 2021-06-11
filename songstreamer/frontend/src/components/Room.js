import React, { useState } from "react";
// import { Button, Grid, Typography} from "@material-ui/core";

const Room = (props) => {


return (
    <div>
        <h3>Room Code: {props.data.roomCode}</h3>
        <p>Votes: {props.data.votesToSkip}</p>
        <p>Guest Can Pause: {props.data.guestCanPause.toString()}</p>
        <p>Host: {props.data.isHost.toString()}</p>
    </div>
)
}

export default Room