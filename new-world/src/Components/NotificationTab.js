import React from "react"
import styled from "styled-components"

const Notifications = styled.div`
    display:flex;
    flex-flow:column nowrap;
    background-color:white;
    margin-top:50px;
    margin-right:30px;
    width:15%;
    height:400px;
    border:1px solid black;
    justify-content:start;
    align-items:center;
    background-color:darkgrey;
`

const Title = styled.div`
    width:60%;
    height:auto;
    margin-top:1rem;
    text-align:center;
    background-color:grey;
    color:white;
`

const Feed = styled.div`
    background-color:grey;
    width:98%;
    height:50px;
    margin-top:5%;
    border-radius: 25px;
`

const P = styled.p`
    color:white;
    margin-left:0.5rem;
`

const NotificationTab = () =>{

return(
<Notifications>
                <Title>
                    notifications
                </Title>
                <Feed>
                    <P>notifications</P>
                </Feed>
                <Feed>
                    <P>notifications</P>
                </Feed>
                <Feed>
                    <P>notifications</P>
                </Feed>
                <Feed>
                    <P>notifications</P>
                </Feed>
                <Feed>
                    <P>notifications</P>
                </Feed>
</Notifications>
)}

export default NotificationTab