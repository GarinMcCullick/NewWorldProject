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

const ServerLine = styled.div`
    width:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
`

const P2 = styled.p`
    border:1px solid black;
    width:25%;
`

const P3 = styled.p`
    border-top:1px solid black;
    border-bottom:1px solid black;
    border-left:1px solid black;
    width:25%;
`

const P4 = styled.p`
    border-top:1px solid black;
    border-bottom:1px solid black;
    border-right:1px solid black;
    width:25%;
`

export default function HelpServers() {

    return(
        <Wrapper>
            <Title>
                <H2>Servers</H2>
            </Title>
            <Body>
                <P1>Serverlist:</P1>
                <br />
                <ServerLine>
                    <P2>Server Name</P2><P2>Region</P2>
                </ServerLine>
                <ServerLine>
                    <P3>Kharmine</P3><P4>NA East</P4>
                </ServerLine>
            </Body>
        </Wrapper>
    )
}