import React from "react"
import styled from "styled-components"
import RosterCard from "../Components/RosterCard"

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
    display:flex;
    flex-flow:column nowrap;
    background-color:rgba(66, 69, 69, 1);;
`
const Title = styled.div`
    width:100%;
    height:50px;
`

const Headings = styled.div`
    background-color:grey;
    height:40px;
    width:100%;
    display:flex;
    flex-flow:row nowrap;
    text-align:center;
`
const Section = styled.div`
    width:14%;
    height:40px;
    background-color:grey;
    font-size:28px;
`

const Body = styled.div`
    height:100%;
    width:100%;
`

const Roster = () => {
    return(
        <Wrapper>
            <Div>
                <Title>
                    Roster
                </Title>
                <Headings>
                    <Section></Section>
                    <Section>name</Section>
                    <Section>level</Section>
                    <Section>Main</Section>
                    <Section>Secondary</Section>
                    <Section>Crafter</Section>
                    <Section>Crafting Level</Section>
                </Headings>
                <Body>
                    <RosterCard />
                    <RosterCard />
                    <RosterCard />
                    <RosterCard />
                    <RosterCard />
                    <RosterCard />
                    <RosterCard />
                    <RosterCard />
                </Body>
            </Div>
        </Wrapper>
    )
}

export default Roster