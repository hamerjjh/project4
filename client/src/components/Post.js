import React, { Component } from 'react';
import axios from "axios";
import NewPost from './NewPost'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import PostCard from './PostCard'



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

const Hello = styled.div`
.tag {
    border-radius: 20px;
    border: 2px solid orange;
    width: 400px;
    height: 250px;
  }
  
  header {
    background: orange;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 2px;
  }
  
  .hello {
    font-family: sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 60px;
    color: white;
  }
  
  .mynameis {
    font-family: sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 30px;
  }
  
  .dottedline {
    border-top: 3px dotted black;
    margin-top: 100px;
  }
`


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

    //getPosts = async () => {
    //   
    //}


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
                <Hello><p>Description: {this.state.posts.description}</p></Hello>
                
             
            
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