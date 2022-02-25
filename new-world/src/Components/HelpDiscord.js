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

const P2 = styled.p`
    color:black;
    margin-left:5%;
    margin-right:5%;
`

export default function HelpDiscord() {

    return(
        <Wrapper>
            <Title>
                <H2>Login / Logout Feature</H2>
            </Title>
            <Body>
                <P1>*We work to develope and integrate our online services in coordination with our companies discord. Discord is vital to our companies success and therefore every member is required to have a discord account to be a member of The Agency and by extension to Login / out of our online applications.*</P1>
                <br />
                <P2>Our website uses the discord login system for members to login. If you are not an Agency member and would like to be please join our discord applicant server (____server____) and submit an application request and we will get back to you as soon as possible.</P2>
            </Body>
        </Wrapper>
    )
}