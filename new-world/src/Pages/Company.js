import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    text-align:center;
    display:flex;
    align-items:center;
`

const Div = styled.div`
    width:50px;
    height:50px;
    border:1px solid red;
`


const Company = () => {
    return(
        <Wrapper>
           <Div>
               Company
           </Div>
        </Wrapper>
    )
}

export default Company