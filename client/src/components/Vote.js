import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components"


const ReactionContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

img {
    height: 60px;
    width: 60px;
}
`




class Vote extends Component {

    state = {
        totalVotes: 0
    }

    componentWillMount() {
       this.setState({
         totalVotes: this.props.votes
       })
    }

    _approve = async () => {
        const payload = {
            vote: {
                post_id: this.props.id
            }
        }


        const response = await axios.post(`/api/posts/${this.props.id}/votes`, payload)

        const addOne = this.state.totalVotes + 1

        this.setState({
            totalVotes: addOne
        })
        console.log(this.state.totalVotes)
    }
    _disapprove = () => {
        const removeOne = this.state.totalVotes - 1

        this.setState({
            totalVotes: removeOne
        })
        console.log(this.state.totalVotes)
    }

    render() {


        return (
            <ReactionContainer>
                <div>
                    <img onClick={this._approve} src="https://www.emojirequest.com/images/PointingLaughingEmoji.jpg"></img>
                </div>
                Votes:{this.state.totalVotes}
                <div>
                    <img onClick={this._disapprove} src="http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/pouting-face.png" ></img>
                </div>

            </ReactionContainer>
        )
    }
}

export default Vote;