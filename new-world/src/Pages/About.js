import styled from "styled-components"
import Carousel from "../Components/Carousel"

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-between;
`
const Title = styled.div`
    width:100%;
    height:5%;
    margin-top:50px;
`

const TopHalf = styled.div`
    width:95%;
    height:35%;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
`

const LeftPanel = styled.div`
    height:300px;
    width:700px;
    margin-left:5rem;
    margin-top:auto;
    margin-bottom:auto;
    box-shadow: 15px 5px 15px 5px #292626;
    border-radius:5%;
`

const RightPanel = styled.div`
    height:250px;
    width:500px;
    margin-right:10%;
    margin-top:auto;
    margin-bottom:auto;
    box-shadow: 15px 5px 15px 5px #292626;
    border-radius:5%;
`

const BottomHalf = styled.div`
    height:500px;
    width:700px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:auto;
    margin-top:auto;
    box-shadow:5px 5px 15px 5px black;
`

const About = () => {
    return(
        <Wrapper id='about'>
            <Title>
                About Us
            </Title>

            <TopHalf>
                <LeftPanel>
                    
                </LeftPanel>
                <RightPanel>

                </RightPanel>
            </TopHalf>

            <BottomHalf>
                <Carousel />
            </BottomHalf>
        </Wrapper>
    )
}

export default About