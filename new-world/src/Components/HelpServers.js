import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-flow:column nowrap;
`

const Title = styled.div`
    width:100%;
    height:10%;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-items:center;
`

const Body = styled.div`
    width:100%;
    height:90%;
`

const H2 = styled.h2`
    color:black;
    font-size:42px;
`

const P1 = styled.p`
    color:grey;
    margin-left:5%;
    margin-right:5%;
`

export default function HelpServers() {

    return(
        <Wrapper>
            <Title>
                <H2>Servers</H2>
            </Title>
            <Body>
                <P1></P1>
            </Body>
        </Wrapper>
    )
}