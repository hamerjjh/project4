import React from 'react';
import axios from "axios"
import PostList from "./PostList"
import styled from "styled-components"

const HomeBackground = styled.div`
    font-family: 'Rammetto One', cursive;
`

const WelcomeText = styled.h1`
    font-size: 50px;
    text-shadow: 2px 2px white;
    text-align: center;
    margin-top: 0px;
    padding-top: 30px;
`

const PostText = styled.h2`
    font-size: 40px;
    text-align: center;
     text-shadow: 2px 2px white;
`

const HomePage = (props) => {
    return (
        <HomeBackground>
        <WelcomeText>Welcome to Tindros </WelcomeText>
        <PostText>View of all the best Tinder Intros below </PostText>
        <PostList posts={props.posts}/>
            
        </HomeBackground>
    );
};

export default HomePage;