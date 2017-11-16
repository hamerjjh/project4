import React from 'react';
import axios from "axios";
import styled from "styled-components"


const Reactions = styled.div`
display: flex;
justify-content: space-around;

img {
    height: 75px;
    width: 75px;
}


`



const Vote = (props) => {
    const { disapprove, approve } = props;
  
    return (
      <div>
            <Reactions>
        <img onClick={approve} src="https://www.emojirequest.com/images/PointingLaughingEmoji.jpg"></img>
            </Reactions>
            <Reactions>
        <img onClick={disapprove} src="http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/pouting-face.png" ></img>
            </Reactions>
        
      </div>
    )
  }

  export default Vote;