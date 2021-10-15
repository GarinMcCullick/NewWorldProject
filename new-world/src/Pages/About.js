import styled from "styled-components"

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
    border:1px solid red;
    width:95%;
    height:35%;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
`

const LeftPanel = styled.div`
    border:1px solid red;
    height:300px;
    width:700px;
    margin-left:5rem;
    margin-top:auto;
    margin-bottom:auto;
`

const RightPanel = styled.div`
    border:1px solid red;
    height:250px;
    width:500px;
    margin-right:10%;
    margin-top:auto;
    margin-bottom:auto;
`

const BottomHalf = styled.div`
    border:1px solid red;
    height:55%;
    width:95%;
    margin-left:auto;
    margin-right:auto;
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
                
            </BottomHalf>
        </Wrapper>
    )
}

export default About