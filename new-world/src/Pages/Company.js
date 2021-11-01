import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    align-items:end;
    justify-content:center;
`

const Div = styled.div`
    width:65%;
    height:94.5%;
    border:1px solid red;
    display:flex;
    flex-flow:column nowrap;
    background-color:rgba(251, 250, 245, 1);
`
const Title = styled.div`
    border:1px solid red;
    width:100%;
    height:50px;
`

const Body = styled.div`
    border:1px solid red;
    height:100%;
    width:100%;
`

const Company = () => {
    return(
        <Wrapper>
           <Div>
               <Title>
               Company Name Roster
               </Title>
               <Body>
                name, level, class, crafter tag if so what that trade is, send a message
               </Body>
           </Div>
        </Wrapper>
    )
}

export default Company