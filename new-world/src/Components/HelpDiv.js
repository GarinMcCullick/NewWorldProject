import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { FaDiscord, FaScroll, FaUserCheck, FaNetworkWired } from "react-icons/fa"
import HelpDiscord from "./HelpDiscord";
import HelpRules from "./HelpRules";
import HelpAttendance from "./HelpAttendance";
import HelpServers from "./HelpServers";

const Wrapper = styled.div`
    width:80%;
    height:85%;
    position:absolute;
    top:55%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:rgba(200,200,200,0.97);
    display:flex;
`

const Navigation = styled.div`
    width:10%;
    height:100%;
    border-right:5px double grey;
    display:flex;
    flex-flow:column wrap;
    align-items:center;
`

const Info = styled.div`
    width:90%;
    height:100%;
`

const H3 = styled.h3`
    text-decoration:underline;
    letter-spacing:0.1rem;
    margin-top:1rem;
`

const Title = styled.div`
    width:100%;
    height:10%;
`

const Icons = styled.div`
    width:100%;
    height:90%;
`

const P = styled.div`
    font-size:12px;
    margin-top:-1rem;
    color:black;
`

const FADiscord = styled(FaDiscord)`
    height:50px;
    width:50px;
    &:hover{
        color:skyblue;
    }
`

const FAScroll = styled(FaScroll)`
    height:50px;
    width:50px;
    &:hover{
        color:#C9AE5D;
    }
`

const FAUserCheck = styled(FaUserCheck)`
    height:50px;
    width:50px;
    margin-left:1rem;
    &:hover{
        color:green;
    }
`

const FANetworkWired = styled(FaNetworkWired)`
    height:50px;
    width:50px;
    &:hover{
        color:grey;
    }
`

const Icon = styled.div`
    color:white;
    margin-top:2rem;
        &:hover{
            cursor:pointer;
            text-decoration:underline;
            text-decoration-color:black;
        }
`

export default function HelpDiv(){

    const [showDiscordInfo, setShowDiscordInfo] = useState(true);
    const [showRulesInfo, setShowRulesInfo] = useState(false);
    const [showAttendanceInfo, setShowAttendanceInfo] = useState(false);
    const [showServerInfo, setShowServerInfo] = useState(false);

    const handleDiscordInfoClick = () => {
        setShowDiscordInfo(true);
        setShowRulesInfo(false);
        setShowAttendanceInfo(false);
        setShowServerInfo(false);
        
        console.log(1)
        
        }

    const handleRulesInfoClick = () => {
        setShowDiscordInfo(false)
        setShowRulesInfo(true)
        setShowAttendanceInfo(false)
        setShowServerInfo(false)
        console.log('2')
    }

    const handleAttendanceInfoClick = () => {
        setShowDiscordInfo(false);
        setShowRulesInfo(false);
        setShowAttendanceInfo(true);
        setShowServerInfo(false);
        console.log('3')
    }

    const handleServerInfoClick = () => {
        setShowDiscordInfo(false);
        setShowRulesInfo(false);
        setShowAttendanceInfo(false);
        setShowServerInfo(true);
        return(
        console.log('4')
        )
    }


    
        let display 
        if(showDiscordInfo === true){
            display = <HelpDiscord />
        }else if(showRulesInfo === true) {
            display = <HelpRules />
        }else if(showAttendanceInfo === true) {
            display = <HelpAttendance />
        }else if(showServerInfo === true) {
            display = <HelpServers />
        }
    

    return(
        <Wrapper>
            <Navigation>
                <Title>
                    <H3>Info</H3>
                </Title>
                <Icons>
                    <Icon onClick={handleDiscordInfoClick}>
                        <FADiscord />
                        <P>Login</P>
                    </Icon>
                    <Icon onClick={handleRulesInfoClick}>
                        <FAScroll />
                        <P>Rules</P>
                    </Icon>
                    <Icon onClick={handleAttendanceInfoClick}>
                        <FAUserCheck />
                        <P>Attendance</P>
                    </Icon>
                    <Icon onClick={handleServerInfoClick}>
                        <FANetworkWired />
                        <P>Servers</P>
                    </Icon>
                </Icons>
            </Navigation>
            <Info>
                {display}
            </Info>
        </Wrapper>
    )
}