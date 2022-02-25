import React from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom';
//add on authorized nav import {DropDownMenu, NavItem} from './NavItem'

const Wrapper = styled.div`
    background-color: rgb(35,35,35);
    height:5%;
    width:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    position:fixed;
    opacity:0.9;
    z-index:10;
    align-items:center;
    overflow:hidden;
    
`

const Links = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
`

const NavLink = styled(HashLink)`
    letter-spacing:0.09rem;
    color:silver;
    font-weight: 600;

    -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
    -webkit-mask-size: 200%;

  animation: shine 2.5s linear infinite;

  @keyframes shine {
    from { -webkit-mask-position: 150%; }
    to { -webkit-mask-position: -50%; }
  }

  
  &:hover {
      text-decoration-color:skyblue;
  }
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

const LoginClick = () =>{
    window.open('https://the-agency-backend.herokuapp.com/auth/discord', '_self')
}

function UnAuthNav() {

        return(
            <Wrapper>
                <Router>
                <Links>
                    <NavLink smooth to='#home'>Home</NavLink>
                    <NavLink smooth to='#about'>About</NavLink>
                    <NavLink smooth to='#community'>Community</NavLink>
                    <NavLink smooth to='#companies'>Companies</NavLink>
                </Links>
                </Router>
                <Login onClick={LoginClick}>
                    Discord Login
                </Login>
                {/*This goes on Authorized nav to add username and dropdown <NavItem > <DropDownMenu /> </NavItem>*/}
            </Wrapper>
        )
    }


export default UnAuthNav
    