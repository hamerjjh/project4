import styled from 'styled-components'


export const Button = styled.button`
display: flex;
justify-content: center;
margin: 0 auto;
`

export  const PostContainer = styled.div`

padding-top: 0px;
padding-bottom: 10px;
background-color: white;
opacity: .8;
justify-content: center;
margin-left: 50px;

margin-bottom: 20px;
`

export const PostName = styled.div`
font-family: 'Rammetto One', cursive;
font-size: 38px;
text-align: center;
letter-spacing: 2px;
padding-top: 25px;
`

export const PostBody = styled.div`
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

export const NewPostForm = styled.div`

`

export const NameTag = styled.div`
border-radius: 20px;
border: 2px solid orange;
width: 400px;
height: 250px;
`

export const Header = styled.div` 
background: orange;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
padding: 2px;
`

export const Hello = styled.div`
font-family: sans-serif;
font-weight: bold;
text-align: center;
font-size: 60px;
color: white;
`

export const NameIs = styled.div`
font-family: sans-serif;
font-weight: bold;
text-align: center;
font-size: 25px;
`

export const DottedLine = styled.div`.dottedline {
    border-top: 3px dotted black;
    margin-top: 100px;
  }
`
export const NameTagContainer = styled.div`
display: flex;
justify-content: space-around;
`