import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom' 


const HeadText = styled.div`
    text-align: center
`

const PostForm= styled.div`
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-top: 0px;
        padding-bottom: 10px;
        background-color: white;
        opacity: .8;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        margin-bottom: 20px;
        align-items: center;
`
const PostBox = styled.div`
    text-align: center;
     margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 18px;
    color: rgb(17, 17, 114);
    label {
        padding-right: 5px;
        margin-bottom: 5px;
    }
    textarea, input {
        text-align: center;
        margin-top: 10px;
        border-radius: 5px;
        width: 30%;
        font-size: 16px;
    }
    
`

class EditPost extends Component {




    state = {
        post: {
            title: "",
            category: "",
            description: ""
        },
        redirectToPostPage: false

    }

    async componentWillMount() {
        const postId = this.props.match.params.id
        const res = await axios.get(`/api/posts/${postId}`)
        this.setState({ post: res.data })
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatePost = { ...this.state.post }
        updatePost[attribute] = event.target.value
        this.setState({ post: updatePost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const postId = this.props.match.params.id
        const response = await axios.patch(`/api/posts/${postId}`, {
            post: this.state.post
        })
        this.setState({ redirectToPostPage: true, post: response.data })

    }



    render() {

        if (this.state.redirectToCityPage) {
            const cityId = this.props.match.params.city_id
            return <Redirect to={`/cities/${cityId}`} />
        }

        return (
            <div>
            <HeadText>
                <h1>Enter Information To Edit Post </h1>
                </HeadText>
                <PostForm>
                <form onSubmit={this.handleSubmit}>
                    <PostBox>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} name="title" type="text" value={this.state.post.title} />
                    </div>
                    <div>
                        <label htmlFor="category">Text: </label>
                        <textarea onChange={this.handleChange} name="category" type="text" value={this.state.post.category} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea onChange={this.handleChange} name="description" type="text" value={this.state.post.description} />
                    </div>
                    </PostBox>
                    <button>Save Post</button>
                </form>
                </PostForm>
            </div>
        );
    }
} 


export default EditPost;