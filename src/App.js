import React from 'react';
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'; // to create multipage react web app

import Navbar from './components/Navbar/Navbar';
import Home  from './components/Home/Home';
import Auth from './components/Auth/Auth';


const App = () => {

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/auth' component={Auth} />
                    <Redirect to='/' />
                </Switch>  
            </Container>
        </BrowserRouter>
    );
}

export default App;