import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PostCardStyles = styled.div`
display: flex;
flex-direction: column;
// width: 30%;
font-size: 20px;
width: 300px;  
height: 350px; 
margin: 40px auto;
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
`

class PostCard extends Component {

    state = {
        showConfirmation: false,
    }

    toggleShowConfirmationAlert = () => {
        this.setState({showConfirmation: !this.state.showConfirmation})
    }

    hideOnDeletion = (post) => {
        this.props.deletePost(post)
        this.toggleShowConfirmationAlert()
    }

    

    render() {
        return (
            <PostCardStyles>
                <h4>{this.props.post.title}</h4>
                <h5>{this.props.post.text}</h5>
                <button onClick={this.toggleShowConfirmationAlert}>Delete Post</button>
                <Link to={`/posts/${this.props.post.id}/`}>
                    <button>Edit </button> 
                </Link>
            </PostCardStyles>

        );
    }
}

export default PostCard;