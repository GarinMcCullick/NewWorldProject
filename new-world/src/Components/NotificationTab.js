import React from "react"
import styled from "styled-components"
import Draggable from 'react-draggable'

const DragWrapper = styled.div`
position:absolute;
width:100%;
height:100%;
display:flex;
justify-content:end;
align-items:end;
`

const Notifications = styled.div`
    display:flex;
    flex-flow:column nowrap;
    background-color:white;
    width:15%;
    height:400px;
    border:1px solid black;
    justify-content:start;
    align-items:center;
    background-color:darkgrey;
    position:relative;
    z-index: 10;
`

const Title = styled.div`
    width:100%;
    height:auto;
    text-align:center;
    background-color:grey;
    color:white;
    cursor:move;
    user-select:none;
`

const Feed = styled.div`
    background-color:grey;
    width:98%;
    height:50px;
    margin-top:5%;
    border-radius: 25px;
    cursor:pointer;
`

const P = styled.p`
    color:white;
    margin-left:0.5rem;
`

const P1 = styled.p`
    font-size:14px;
    color:lightgrey;
`

const NotificationTab = () =>{

return(
<DragWrapper>
<Draggable handle='#handle' bounds='parent'>
<Notifications>
                <Title id='handle'>
                    notifications
                    <P1>(Drag Me)</P1>
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
</Draggable>
</DragWrapper>
)}

export default NotificationTab