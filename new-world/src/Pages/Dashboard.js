import React from "react"
import styled from "styled-components"
import NotificationTab from "../Components/NotificationTab"

const Wrapper = styled.div`
    background-color:white;
`


const Dashboard = () => {
    return(
        <Wrapper>
            <NotificationTab />{/*make draggable*/}
        </Wrapper>
    )
}

export default Dashboard