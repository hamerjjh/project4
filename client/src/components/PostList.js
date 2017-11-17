import React, {Component} from 'react';
import { Link } from "react-router-dom"
import axios from "axios";
import Post from "./Post"
import styled from "styled-components"
import NewPost from './NewPost'
import {PostContainer, PostName, PostBody, NewPostForm, NameTag, Header, Hello, NameIs, DottedLine, NameTagContainer} from '../Styles/PostStyle'




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
        
    }
    a:visited {
        color: rgb(17, 17, 114);
    }
`




class PostList extends Component {

    state = {
        posts: {},
        showForm: false,
        
    }

    async componentWillMount() {
        this.getAllPosts()
    }

    getAllPosts = async ()=> {
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
            this.props.refreshPosts()
        } catch (error) {
            console.log(error)
        }
    }

    toggleShowForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }


 
    render(){
    return (
        <PostContainer>
            <button onClick={this.toggleShowForm}>Add New Post </button>
            {this.state.showForm ? <NewPost toggleShowForm={this.toggleShowForm} pushPosts={this.props.pushPosts}  handleSubmit={this.handleSubmit} /> : null}
            {
                this.props.posts.map((post) => {  
                return (

                        <PostCard>
                            <PostName></PostName>
                            <NameTagContainer>
                <NameTag>
                    
                        <Header>
                            <Hello>
                                Hello
                             </Hello>
                             </Header>
                                <NameIs>
                                <p>{post.description}</p> 
                                </NameIs>
                                    <DottedLine>
                                    
                                    </DottedLine>
                               
                            
                        
                    
                </NameTag>
                </NameTagContainer>
                           
                <Link to={`/posts/${post.id}`}> Click to Vote </Link>
                        </PostCard>
                )
            })
            }
            
        </PostContainer>
    );
}
};

export default PostList;