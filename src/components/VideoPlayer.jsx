import React, {useContext} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
import {SocketContext} from '../SocketContext';

const VideoPlayer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);
    // const classes = useStyles();
    return (
        <Grid container>
            {/*Our own video*/}
            {
                stream && (
                    <Paper>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
                            <video playsInline ref={myVideo} controls autoPlay></video>
                        </Grid>
                    </Paper>
                )
            }
            {/*User's video*/}
            {
                callAccepted && !callEnded && (
                    console.log(userVideo),
                    <Paper>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                            <video playsInline ref={userVideo} autoPlay></video>
                        </Grid>
                    </Paper>
                )
            }
        </Grid>
    )
}

export default VideoPlayer
