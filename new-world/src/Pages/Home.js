import { useState } from "react"
import styled from "styled-components"
import './Home.css'
import HelpDiv from "../Components/HelpDiv"

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    align-items:center;
    background-image: url(/Images/lostArkPaladin.jpg);
    background-size:cover;
`

const Logo = styled.div`
color:red;
    position:fixed;
    top:86.5%;
    left:93%;
    width:100px;
    height:100px;
    background-image: url(/Images/winged-sword.svg);
    background-size:cover;
    animation: spin 3s infinite;
        @keyframes spin {
            100%{
                transform: rotateY(360deg)
            }
        }
    &:hover{
        animation:none;
        filter: invert(8%) sepia(100%) saturate(6481%) hue-rotate(246deg) brightness(102%) contrast(143%);
        cursor:pointer;
    }
    z-index:4;
`

const Title = styled.div`
    width:50%;
    height:100px;
    margin-left:auto;
    margin-right:auto;
    border-radius:50px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    opacity:0.75;
    box-shadow: 5px 5px 15px 5px grey;
`

const HelpDivWrapper = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:100%;
    height:100%;
    background-color:rgba(50,50,50,0.4);
    z-index:3;
`


const Home = () => {
    
const [helpScreen, setHelpScreen] = useState(false)

const onClickHelpScreen = () => {
    if(helpScreen === false){
    setHelpScreen(true)
    }else{
        setHelpScreen(false)
    }
}

if(helpScreen === false){
    return(
        
        <Wrapper id='home'>
            <Logo onClick={onClickHelpScreen}></Logo>
           <Title>
                <h1 className='anim-typewriter'>Welcome To The Agency!</h1>
           </Title>
           
        </Wrapper>
    )
}
else{
    return(
        
        <Wrapper id='home'>
            <Logo onClick={onClickHelpScreen}></Logo>
           <Title>
                <h1 className='anim-typewriter'>Welcome To The Agency!</h1>
           </Title>
           <HelpDivWrapper>
               <HelpDiv />
           </HelpDivWrapper>
        </Wrapper>
    )
}
}

export default Home