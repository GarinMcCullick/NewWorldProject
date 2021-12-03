import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display:flex;
    flex-flow:row nowrap;
    width:100%;
    height:25px;
    background-color:white;
    font-size:18px;
    margin-top:10px;
`

const UserAvatar = styled.div`
    width:14%;
`

const UserName = styled.div`
    width:14%;
`

const Level = styled.div`
    width:14%;
`

const MainClass = styled.div`
    width:14%;
`

const SecondaryClass = styled.div`
    width:14%;
`

const CrafterTag = styled.div`
    width:14%;
`

const CraftingLevel = styled.div`
    width:14%;
`

const RosterCard = () =>{
    return(
        <Card>
            <UserAvatar>pic</UserAvatar>
            <UserName>name</UserName>
            <Level>level</Level>
            <MainClass>Primary</MainClass>
            <SecondaryClass>Secondary</SecondaryClass>
            <CrafterTag>craft</CrafterTag>
            <CraftingLevel>Crafting Level</CraftingLevel>
        </Card>
    )
}

export default RosterCard