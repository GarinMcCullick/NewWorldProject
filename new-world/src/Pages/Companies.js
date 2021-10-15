import styled from "styled-components"

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    flex-flow:column nowrap;
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
`

const LeftSide = styled.div`
    width: 45%;
    height:90%;
    margin-left:auto;
    margin-right:auto;
    background-color: rgba(180,180,180, 1);
    border-radius:10px;
    box-shadow: 5px 5px 20px 10px darkgrey;
`

const RightSide = styled.div`
    width: 30%;
    margin-left:auto;
    margin-right:auto;
    height:60%;
    background-color: rgba(180,180,180, 1);
    border-radius:10px;
    box-shadow: 5px 5px 20px 10px darkgrey;
`

const Companies = () => {
    return(
        <Wrapper id='companies'>
            <Title>
                Companies!
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

export default Companies