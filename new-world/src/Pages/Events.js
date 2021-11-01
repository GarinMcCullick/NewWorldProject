import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    align-items:end;
    justify-content:center;
    background-color:black;
`

const Div = styled.div`
    width:60%;
    height:94.5%;
    background-color:rgba(32,32,32, 1);
    display:flex;
    flex-flow:column nowrap;
`

const Title = styled.div`
    color:rgba(241, 240, 225, 1);
    width:100%;
    height:50px;
    border:1px solid red;
`

const Body = styled.div`
    color:rgba(241, 240, 225, 1);
    width:100%;
    height:100%;
    display:flex;
    flex-flow:column nowrap;
    justify-content:start;
    align-items:center;
`
const Card = styled.div`
    width:80%;
    height:40%;
    border:1px solid red;
    margin-top:1rem;
`

const Events = () => {
    return(
        <Wrapper>
           <Div>
                <Title>
                    Events
                </Title>

                <Body>
                    <Card>
                        Event Cards
                    </Card>
                    <Card>

                    </Card>
                </Body>
           </Div>
        </Wrapper>
    )
}

export default Events