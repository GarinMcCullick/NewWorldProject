import React from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
//add on authorized nav import {DropDownMenu, NavItem} from './NavItem'

const Wrapper = styled.div`
    background-color: grey;
    height:5%;
    width:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    position:fixed;
    opacity:0.9;
    z-index:1;
    align-items:center;
`

const Links = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
`

const NavLink = styled(HashLink)`
    color:black;
`

const Login = styled.div`
    background-color:skyblue;
    max-width:15%;
    width:7%;
    height:80%;
    margin-right:1rem;
    display:flex;
    cursor:pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    justify-content:center;
    align-items:center;
    font-size:70%;
`

const A = styled.a`
    text-decoration:none;
    color:black;
`

function UnAuthNav() {

        return(
            <Wrapper>
                <Links>
                    <NavLink smooth to='#home'>Home</NavLink>
                    <NavLink smooth to='#about'>About</NavLink>
                    <NavLink smooth to='#community'>Community</NavLink>
                    <NavLink smooth to='#companies'>Companies</NavLink>
                </Links>
                <Login>
                    <A href=''>Discord Login</A>
                </Login>
                {/*This goes on Authorized nav to add username and dropdown <NavItem > <DropDownMenu /> </NavItem>*/}
            </Wrapper>
        )
    }


export default UnAuthNav
    