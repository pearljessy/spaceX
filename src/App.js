import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Launches from './Components/Launches'
import Launch from './Components/Launch'
import './App.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import logo from './share.jpg'


const client = new ApolloClient({
  uri: 'https://teamwork-278213.wl.r.appspot.com/graphql'
})

 const App = () => {
  return (
    <ApolloProvider client={client}>
     <Router>
       <Switch>
        <div className="container">
          <img src={logo} alt='logo' style={{width: 300, display: 'block', margin: 'auto'}} />
          <Route exact path = "/" component = {Launches} />
          <Route path = "/Launch/:flight_number" component = {Launch} />
        </div>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
