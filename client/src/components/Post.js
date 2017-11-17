import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components"
import { Link, Redirect } from 'react-router-dom'
import PostCard from './PostCard'
import Vote from './Vote'
import { PostContainer, PostName, PostBody, NewPostForm, NameTag, Header, Hello, NameIs, DottedLine, NameTagContainer } from '../Styles/PostStyle'



class Post extends Component {

    state = {
        posts: {},
        showForm: false,
        redirectToPost: false,
        doneLoading: false
    }

    async componentWillMount() {
        try {
            const { id } = this.props.match.params
            const response = await axios.get(`/api/posts/${id}`)
            console.log(response.data)
            this.setState({
                posts: response.data,
                doneLoading: true
            })

        } catch (error) {
            console.log(error)
        }

    }

    deletePost = async (post) => {
        try {
            const { id } = this.props.match.params
            const response = await axios.delete(`/api/posts/${id}`)
            console.log(response.data)
            this.setState({ posts: response.data })
            this.setState({ redirectToPost: !this.state.redirectToPost })
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
        if (this.state.redirectToPost) {
            return (
                <Redirect to={{
                    pathname: '/home',
                    state: { posts: this.state.posts }
                }} />
            )
        }

        return (
            <div>
                <div></div>
                <PostContainer>
                    <PostBody>
                        <p>*Click Emoji To Vote On The Tindro*</p>
                        <PostName>Title: {this.state.posts.title}</PostName>
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

                                {this.state.doneLoading ? <Vote {...this.state.posts} /> : null}

                            </NameTag>
                        </NameTagContainer>


                        <Link to={`/posts/${this.props.match.params.id}/edit`}>
                            <button>Edit </button>
                        </Link>
                        <button onClick={this.deletePost}>Delete Post</button>
                        <Link to={`/home/`}>
                            <button>Back to Home </button>
                        </Link>
                    </PostBody>
                </PostContainer>



                {/* {this.state.posts.map(post => (
                    <PostCard deletePost={this.deletePost} key={post._id} post={post} />
                ))}
                  */}
            </div>
        );
    }
}

export default Post;