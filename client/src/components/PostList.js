import React from 'react';
import { Link } from "react-router-dom"
import Post from "./Post"
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
    width: 350px;  height: 300px; margin: 40px auto;
    text-align: center;
    justify-content: space-around;
    float: left;
    padding: 20px 10px 15px 10px;
    
    
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
                            <Post/>
                            <Link to={`/posts/${post.id}`}> Check It Out </Link>
                        </PostCard>
                )
            })
            }
            
        </PostContainer>
    );
};

export default PostList;