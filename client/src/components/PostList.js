import React from 'react';
import { Link } from "react-router-dom"

import styled from "styled-components"

const PostContainer = styled.div`
    flex-wrap: wrap;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 15px;
    font-family: 'Rammetto One', cursive;
`

const PostCard = styled.div`
    &:hover {
        opacity: .9;
        font-size: 26px;
    }
    display: flex;
    flex-direction: column;
    // width: 30%;
    font-size: 20px;
    width: 300px;  height: 300px; margin: 40px auto;
    text-align: center;
    justify-content: space-around;
    float: left;
    padding: 20px 10px 15px 10px;
    background: rgba(216, 212, 212, 1);
    border: 1px solid #fff;
    -moz-box-shadow: 0px 2px 15px #333;
    position: relative;
    -webkit-transform: rotate(${props => props.rotationDegrees}deg);
    
    -moz-transform: rotate(-8deg);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    
    img {
        height: 80%;
        filter: saturate(40%) grayscale(30%);
    }
    a {
        padding-bottom: 10px;
    }
    a:visited {
        color: rgb(17, 17, 114);
    }
`




const PostList = (props) => {
    return (
        <PostContainer>
            {
                props.posts.map((post) => {  
                return (
                    
                        <PostCard>
                            Title: {post.title}
                            <br/>
                            Category: {post.category}
                            <br />
                            <Link to={`/posts/${post.id}`}> Check It Out </Link>
                        </PostCard>
                )
            })
            }
            
        </PostContainer>
    );
};

export default PostList;