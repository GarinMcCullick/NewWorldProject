import styled from "styled-components"
import Carousel from '../Components/Carousel'

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    background-color:#181818;
`
const InnerWrapper = styled.div`
    width:80%;
    height:95%;
    border-radius:25px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    margin-top:50px;
    margin-bottom:50px;
    background-color:rgba(255,255,255,.75);
`

const Title = styled.h2`
    height:5%;
`

const About = () => {
    return(
        <Wrapper id='about'>
            <InnerWrapper>
                <Title>About Us</Title>
                <Carousel></Carousel>
            </InnerWrapper>
        </Wrapper>
    )
}

export default About