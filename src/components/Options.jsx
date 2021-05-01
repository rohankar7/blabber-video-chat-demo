import React, {useContext, useState} from 'react';
import {Button, TextField, Grid, Typography, Container, Paper} from '@material-ui/core';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Assignment, Phone, PhoneDisabled} from '@material-ui/icons';
import { SocketContext } from '../SocketContext';

const Options = ({children}) => {

    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);

    const [idToCall, setIdToCall] = useState('');


    return (
        <Container>
            <Paper elevation={10}>
                <form noValidate autoComplete='off'>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant='h6'>Account Info</Typography>
                            <TextField label='Name' value={name} onChange={(event)=>setName(event.target.value)} fullWidth />
                            <CopyToClipboard text={me}>
                                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large' />}>
                                Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant='h6'>Make A Call </Typography>
                            <TextField label='ID to Call' value={idToCall} onChange={(event)=>setIdToCall(event.target.value)} fullWidth />
                            {
                                callAccepted && !callEnded ? (
                                    <Button variant='contained' color='secondary' startIcon={<PhoneDisabled fontSize='large'  onClick={leaveCall}/>}>
                                        Hang Up
                                    </Button>
                                ) : (
                                    <Button variant='contained' color='primary' startIcon={<Phone fontSize='large'  onClick={()=>callUser(idToCall)}/>}>
                                        Call
                                    </Button>
                                )
                            }
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}

export default Options
