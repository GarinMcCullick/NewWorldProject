import styled from "styled-components"

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    flex-flow:column nowrap;
    background-image: url(/Images/Invasion.jpg);
    background-size:cover;
`
const InsideWraper = styled.div`
    height:100%;
    width:100%;
    text-align:center;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    align-items:center;
`

const Title = styled.div`
    width:100%;
    height:5%;
    margin-top:50px;
    color:white;
`

const LeftSide = styled.div`
    width: 30%;
    height:60%;
    margin-left:auto;
    margin-right:auto;
    background-color:lightgrey;
    opacity:0.9;
    box-shadow: 5px 5px 15px 5px black;
`

const RightSide = styled.div`
    width: 45%;
    margin-left:auto;
    margin-right:auto;
    height:90%;
    background-color:lightgrey;
    opacity:0.9;
    box-shadow: 5px 5px 15px 5px black;
`

const Community = () => {
    return(
        <Wrapper id='community'>
            <Title>
                The Community!
            </Title>

            <InsideWraper>
                <LeftSide>

                </LeftSide>
                <RightSide>

                </RightSide>
            </InsideWraper>
        </Wrapper>
    )
}

export default Community