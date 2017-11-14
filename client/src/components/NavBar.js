import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const List = styled.div`
    width: 100vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: black;
    opacity: .8;
    margin: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding-top: 2px;
        padding-bottom: 2px;
        font-family: 'Rammetto One', cursive;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 22px;
    }
    a{
        color: white;
    }
`

const PageTitle = styled.div`
    font-size: 28px;
`

const NavBar = () => {
    return (
        <List>
        <ul>
            <li><Link to="/login">Log In/Sign Up</Link></li>
            <PageTitle><li><Link to="/home">Home Page</Link></li></PageTitle>
            <li><Link to="/">Log Out</Link></li>
        </ul>
        </List>
    );
};

export default NavBar;