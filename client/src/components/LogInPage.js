import React, { Component } from 'react';
import SignUpForm from "./SignUpForm"
import axios from 'axios'
import { Link } from 'react-router-dom'

import styled from "styled-components"

const LoginContainer = styled.div`
    
     box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 22px 0 rgba(0, 0, 0, 0.29);
     width: 60%;
     height: 400px;
     margin: 20px auto;
     align-items: center;
     justify-content: center;
      background-color:rgba(244, 245, 247,.7);
`



const SignUpSection = styled.div` 
    top: 0;
    right: 0;
    background-color: rgba(249, 168, 74, .5);
    height: 100%;
    width: 100%;
    padding-right: 0px;
    margin-right: 0px;
`

const SignInSection = styled.div`
    top: 0;
    left: 0;
   background-color: rgba(255,255,224, .5);
   height: 100%;
   width: 100%;
`

const SectionText = styled.h2`
    font-size: 20px;
    font-family: 'Cabin Condensed', sans-serif;
    padding-top: 5px;
    text-align: center;
`

const UsernameList = styled.div`
    padding-top: 10px;
    a:hover {
        font-size: 22px;
    }
    div {
        padding-top: 5px;
        padding-bottom: 5px;
    }
`

const OrCircle = styled.div` 
  position: relative;
  left: 95%;
  width: 40px;
  height: 40px;
  background-color: #c3cbd8;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  line-height: 40px;
  text-align: center;
    font-family: 'Cabin Condensed', sans-serif;
`


class LogInPage extends Component {
    state = {
        users: []
    }

componentWillMount () {
    this.getAllUsers()
}

getAllUsers = async () => {
    try{
        const res = await axios.get("/api/users")
        console.log(res)
        this.setState({users: res.data})
    }catch (error) {
    console.log(error)
    }
}

    render() {
        return (
            <LoginContainer>
       
           <SignInSection>
           
           <SectionText>Already have an account? Select your username from list below: 
            <UsernameList>
            {this.state.users.map((user) => {
                return <div><Link key={user.id} to={'/home'}> {user.username} </Link></div>
            })}
            </UsernameList>
            </SectionText>
            <OrCircle>OR</OrCircle>
            </SignInSection>
            <SignUpSection>
            <SectionText>
            <SignUpForm />
            </SectionText>
         
            </SignUpSection>
           
            </LoginContainer>
        );
    }
}

export default LogInPage;