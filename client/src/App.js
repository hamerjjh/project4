import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from "axios"
import HomePage from "./components/HomePage"
import NavBar from './components/NavBar'
import SplashPage from "./components/SplashPage"
import LogInPage from "./components/LogInPage"
import Post from "./components/Post"
import EditPost from "./components/EditPost"


class App extends Component {

state = {
  users: [],
  posts: []
}

async componentWillMount() {
  try {
    const response = await axios.get("/api/posts")
    console.log(response)
    this.setState({posts: response.data})

    const userResponse = await axios.get("/api/users")

  } catch(error) {
    console.log(error)
  }
}

pushPosts = (newPost) => {
  const newArray = [...this.state.posts]
  newArray.unshift(newPost)
  this.setState({ posts: newArray })
}








  render() {
    const HomePageComponent = () => (<HomePage pushPosts={this.pushPosts} posts={this.state.posts}/>)
    return (
      <Router>
      <div>
        <NavBar/>
      <Switch>
        <Route exact path="/" render={SplashPage} />
        <Route exact path="/home" render={HomePageComponent} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/posts/:id/edit" component={EditPost} />
        <Route exact path="/login" component={LogInPage} />
       
     </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
