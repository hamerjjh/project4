import React, { Component } from 'react';
import axios from "axios";
import NewPost from './NewPost'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import PostCard from './PostCard'



const PostImageBanner = styled.div`
    img {
        width: 100%;
        background-size: cover;
        background-position: center;
        height: 300px;
        background-repeat: no-repeat;
        padding-top: 0px;
        margin-top: 15px;
        margin-right: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `

  const PostContainer = styled.div`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-top: 0px;
        padding-bottom: 10px;
        background-color: white;
        opacity: .8;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
  `

const PostName = styled.div`
    font-family: 'Rammetto One', cursive;
    font-size: 38px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
`

const PostBody = styled.div`
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 30px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
    text-align: center;
    p {
        font-size: 24px;
        font-family: 'Cabin Condensed', sans-serif;
    }
  
`

  const NewPostForm = styled.div`
    
  `




class Post extends Component {

    state = {
        posts: [],
        showForm: false,
        
    }

    async componentWillMount() {
        this.getPosts();

    }

    getPosts = async () => {
        try {
            const { id } = this.props.match.params
            const response = await axios.get(`/api/posts/${id}`)
            this.setState({ posts: response.data })

        } catch (error) {
            console.log(error)
        }
    }


    deletePost = async (post) => {
        try {
            const { id } = this.props.match.params
            const response = await axios.delete(`/api/posts/${id}`)
            console.log(response)
            this.setState({ posts: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    toggleShowForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }


    pushPosts = (newPost) => {
        const newArray = [...this.state.posts]
        newArray.unshift(newPost)
        this.setState({ posts: newArray })
        this.toggleShowForm()
    }

    render() {


        return (
            <div>
            <PostImageBanner>{this.state.post.title}</PostImageBanner>
            <PostContainer>
            <PostBody>
              
                <PostName>{this.state.post.category}</PostName>
                <p>Description: {this.state.post.description}</p>
                
             
            
            <button onClick={this.toggleShowForm}>Add New Post </button>
               </PostBody>
                    </PostContainer>

                {this.state.showForm ? <NewPost pushPosts={this.pushPosts} id={this.props.match.params.id} handleSubmit={this.handleSubmit} /> : null}
              
                {this.state.posts.map(post => (
                    <PostCard deletePost={this.deletePost} key={post._id} post={post} />
                ))}
                 
                   </div>
        );
    }
}

export default Post;