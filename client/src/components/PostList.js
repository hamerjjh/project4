import React, {Component} from 'react';
import { Link } from "react-router-dom"
import axios from "axios";
import Post from "./Post"
import styled from "styled-components"
import NewPost from './NewPost'
import {PostContainer, PostName, PostBody, NewPostForm, NameTag, Header, Hello, NameIs, DottedLine, NameTagContainer, Button} from '../Styles/PostStyle'




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
        <div>
        <Button onClick={this.toggleShowForm}>Add New Post </Button>
        {this.state.showForm ? <NewPost toggleShowForm={this.toggleShowForm} pushPosts={this.props.pushPosts}  handleSubmit={this.handleSubmit} /> : null}
        <PostContainer>
            
           
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
                                <Link to={`/posts/${post.id}`}> Click to Vote </Link>
                                </NameIs>
                                    <DottedLine>
                                    
                                    </DottedLine>
                               
                            
                        
                    
                </NameTag>
                </NameTagContainer>
                           
                
                        </PostCard>
                )
            })
            }
            
        </PostContainer>
        </div>
    );
}
};

export default PostList;