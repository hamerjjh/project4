import React from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import styled from "styled-components"

const SplashBackground = styled.div`
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Rammetto One', cursive;
     text-align: center;
`

const SplashHeader = styled.div`
    font-size: 30px;
`

const SplashLink = styled.div`
    font-size: 20px;
`

const SplashPage = (props) => {
    return (
        <SplashBackground>
            <SplashHeader> Welcome to Tindros </SplashHeader>  
            <h4>One location for all of your Tinder Intros</h4>  
            <SplashLink><Link to={"/login"}> Log In or Sign Up </Link></SplashLink>

        </SplashBackground>
    );
};

export default SplashPage;