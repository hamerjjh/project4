import React from 'react';
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




const Vote = (props) => {
    const { disapprove, approve } = props;
  
    return (
      <ReactionContainer>
            <div>
        <img onClick={approve} src="https://www.emojirequest.com/images/PointingLaughingEmoji.jpg"></img>
            </div>
            <div>
        <img onClick={disapprove} src="http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/pouting-face.png" ></img>
            </div>
        
      </ReactionContainer>
    )
  }

  export default Vote;