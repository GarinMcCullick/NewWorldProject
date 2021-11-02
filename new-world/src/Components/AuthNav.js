import React from 'react'
import styled from 'styled-components'
import { DropDownMenu, NavItem } from './NavItem'
import { Link } from 'react-router-dom'
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
    color:black;
`
const Ul = styled.ul`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-evenly;
    align-content:center;
    width:100%;
    height:100%;
`
const Li = styled.li`
    color:black;
`

const StyledLink = styled(Link)`
    color:black;
    text-decoration:none;
`

function AuthNav() {

        return(
           
            <Wrapper> 
                <Links>
                            <Ul>

                            

                            <Li><StyledLink to="/dashboard">Dashboard</StyledLink></Li>
                       
                        
                            <Li><StyledLink to="/Roster">Roster</StyledLink></Li>
                        
                        
                            <Li><StyledLink to="/forums">Forums</StyledLink></Li>
                        
                        
                            <Li><StyledLink to="/events">Events</StyledLink></Li>

                            </Ul>
                </Links>
                
                <NavItem > <DropDownMenu /> </NavItem>
            </Wrapper>
        )
    }

export default AuthNav