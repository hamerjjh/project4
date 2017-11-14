import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from "axios"
import HomePage from "./components/HomePage"
import NavBar from './components/NavBar'
import SplashPage from "./components/SplashPage"
import LogInPage from "./components/LogInPage"

class App extends Component {

state = {
  users: [],
  posts: []
}

async componentWillMount() {
  try {
    const response = await axios.get("/api/posts")
    this.setState({posts: response.data})
    const userResponse = await axios.get("/api/users")

  } catch(error) {
    console.log(error)
  }
}




  render() {
    const HomePageComponent = () => (<HomePage posts={this.state.posts}/>)
    return (
      <Router>
      <div>
        <NavBar/>
      <Switch>
        <Route exact path="/" render={SplashPage} />
        <Route exact path="/home" render={HomePageComponent} />
        <Route exact path="/login" component={LogInPage} />
       
     </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
