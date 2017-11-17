import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components"
import { Link, Redirect } from 'react-router-dom'
import PostCard from './PostCard'
import Vote from './Vote'
import { PostContainer, PostName, PostBody, NewPostForm, NameTag, Header, Hello, NameIs, DottedLine, NameTagContainer } from '../Styles/PostStyle'



class Post extends Component {

    state = {
        post: {},
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
                post: response.data,
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
            this.setState({ post: response.data })
            this.setState({ redirectToPost: !this.state.redirectToPost })
        } catch (error) {
            console.log(error)
        }
    }

    toggleShowForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render() {
        if (this.state.redirectToPost) {
            return (
                <Redirect to={{
                    pathname: '/home',
                    state: { post: this.state.post }
                }} />
            )
        }

        return (
            <div>
                <div></div>
                <PostContainer>
                    <PostBody>
                        <p>*Click Emoji To Vote On The Tindro*</p>
                        <PostName>Title: {this.state.post.title}</PostName>
                        <NameTagContainer>
                            <NameTag>

                                <Header>
                                    <Hello>
                                        Hello
                             </Hello>
                                </Header>
                                <NameIs>
                                    <p>{this.state.post.description}</p>
                                </NameIs>
                                <DottedLine>

                                </DottedLine>

                                {this.state.doneLoading ? <Vote {...this.state.post} /> : null}

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