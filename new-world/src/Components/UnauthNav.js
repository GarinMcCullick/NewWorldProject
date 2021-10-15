import React, { Component } from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

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
`

const Links = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    align-content:center;
`

const User = styled.div`
    max-width:25%;
    width:15%;
    height:100%;
    margin-right:1rem;
    display:flex;
    flex-flow:row nowrap;
`

const NavLink = styled(HashLink)`
    color:black;
`

const Icon = styled.div`
    background-color:lightgreen;
    width: 20px;
    height:20px;
    margin:1rem;
    margin-bottom:1.2rem;
    align-self:center;
    border-radius: 100%;
`

const P = styled.p`
    color:white;
`

class UnAuthNav extends Component {

    render() {
        return(
            <Wrapper>
                <Links>
                    <NavLink smooth to='#home'>Home</NavLink>
                    <NavLink smooth to='#about'>About</NavLink>
                    <NavLink smooth to='#community'>Community</NavLink>
                    <NavLink smooth to='#companies'>Companies</NavLink>
                </Links>
                <User>
                    <Icon></Icon>
                    <P>Username</P>
                </User>
            </Wrapper>
        )
    }
}

export default UnAuthNav
    