import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Toolbar } from "@material-ui/core";
import { useDispatch } from 'react-redux'; // it is used to dispatch an action

import { getPosts } from "./actions/posts";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/shining-circle.png';
import useStyles from './styles';


const App = () => {

    const [currentId, setCurrentId] = useState(null); // for editing or updating the form
    const classes = useStyles();
    const dispatch = useDispatch(); //this is a hook

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Toolbar>
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" />
                </Toolbar>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.formContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    </Container>
    );
}

export default App;