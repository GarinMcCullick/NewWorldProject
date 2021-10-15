import styled from "styled-components"

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    align-items:center;
    background-image: url(/Images/epic.jpg);
    background-size:cover;
`

const Title = styled.div`
    width:50%;
    height:100px;
    margin-left:auto;
    margin-right:auto;
    border-radius:50px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    opacity:0.75;
    box-shadow: 5px 5px 15px 5px grey;
`

const H1 = styled.h1`
    text-align:center;
`

const Home = () => {
    return(
        <Wrapper id='home'>
           <Title>
                <H1>Welcome To The Agency!</H1>
           </Title>
        </Wrapper>
    )
}

export default Home