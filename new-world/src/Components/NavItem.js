import React, {useState} from 'react'
import styled from 'styled-components'


const User = styled.div`
    max-width:25%;
    width:15%;
    height:100%;
    margin-right:1rem;
    display:flex;
    flex-flow:column nowrap;
    cursor:pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    justify-content:center;
    align-items:center;
`

const NameContainer = styled.div`
    width:auto;
    height:auto;
    display:flex;
    flex-flow:row nowrap;
    align-items:center;
`

const Icon = styled.div`
    background-color:lightgreen;
    width: 20px;
    height:20px;
    margin-right:1rem;
    border-radius: 100%;
`

const P = styled.p`
    color:white;
`

export const NavItem = (props) => {
    
    const [open, setOpen] = useState(false);
    return(
        <User onClick={()=> setOpen(!open)}>
            <NameContainer>
                <Icon></Icon>
                <P>GordanRamsey</P>
            </NameContainer>
            {open && props.children}
        </User>
    )
}

const DropDown = styled.div`
    width:250px;
    height:300px;
    position:absolute;
    top:48px;
    background-color:rgba(128, 128, 128, 0.85);
    zindex: 3;
    display:flex;
    flex-flow:column nowrap;
    cursor:default;
`

const Link = styled.div`
    height:10%;
    width:100%;
    margin-top:5%;
    display:flex;
    align-items:center;
    background-color:rgba(200, 200, 200, 0.85);
    cursor:pointer;
`

const A = styled.a`
    font-size:65%;
    text-decoration:none;
    color:black;
    margin-left:0.8rem;
`

export const DropDownMenu = () => {

    return(
        <DropDown>
            <Link>
                <A href=''>Profile</A>
            </Link>
            <Link>
                <A href=''>Account Settings</A>
            </Link>
            <Link>
                <A href=''>SignOut</A>
            </Link>
        </DropDown>
    )
}

