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

const Li = styled.li`
    color:black;
    list-style-color:darkgreen;
    list-style-type: circle;
    width:90%;
    max-width:90%;
    text-align:left;
    margin-top:1.5rem;
    margin-left:1rem;
`

const Ol = styled.ol`
    width:100%;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;
    align-items:center;
    margin-bottom:0.5rem;
`

export default function HelpAttendance() {

    return(
        <Wrapper>
            <Title>
                <H2>Attendance</H2>
            </Title>
            <Body>
                <P1>
                    <p>Our attendance policy is as follows:</p>
                    <Ol>
                        <Li>Members are required to login to thier account at least once a week.</Li>
                        <Li>Members must attend one stand up meeting a week. Exceptions will be made on a case by case basis. These are importnant as they are used for tracking our roster</Li>
                    </Ol>
                </P1>
            </Body>
        </Wrapper>
    )
}