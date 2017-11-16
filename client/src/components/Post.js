import React, { Component } from 'react';
import axios from "axios";
import NewPost from './NewPost'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import PostCard from './PostCard'
import {PostContainer, PostName, PostBody, NewPostForm, NameTag, Header, Hello, NameIs, DottedLine, NameTagContainer} from '../Styles/PostStyle'



class Post extends Component {

    state = {
        posts: {},
        showForm: false,
        
    }

    async componentWillMount() {
         try {
            const { id } = this.props.match.params
            const response = await axios.get(`/api/posts/${id}`)
            console.log(response.data)
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
            <div></div>
            <PostContainer>
            <PostBody>
              
                <PostName>{this.state.posts.title}</PostName>
                <NameTagContainer>
                <NameTag>
                    
                        <Header>
                            <Hello>
                                Hello
                             </Hello>
                             </Header>
                                <NameIs>
                                <p>{this.state.posts.description}</p> 
                                </NameIs>
                                    <DottedLine>
                                    
                                    </DottedLine>
                               
                            
                        
                    
                </NameTag>
                </NameTagContainer>
                
             
                <Link to={`/posts/${this.props.id}/edit`}>
                    <button>Edit </button> 
                </Link>
            <button onClick={this.toggleShowForm}>Add New Post </button>
               </PostBody>
                    </PostContainer>

                {this.state.showForm ? <NewPost pushPosts={this.pushPosts} id={this.props.match.params.id} handleSubmit={this.handleSubmit} /> : null}
              
                {/* {this.state.posts.map(post => (
                    <PostCard deletePost={this.deletePost} key={post._id} post={post} />
                ))}
                  */}
                   </div>
        );
    }
}

export default Post;