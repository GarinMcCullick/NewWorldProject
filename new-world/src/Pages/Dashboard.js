import React from "react"
import styled from "styled-components"
import NotificationTab from "../Components/NotificationTab"
import ProfileDashboard from "../Components/ProfileDashboard"

const Wrapper = styled.div`
    
`


const Dashboard = () => {
    return(
        <Wrapper>
            <ProfileDashboard />
            <NotificationTab />{/*make draggable*/}
            
        </Wrapper>
    )
}

export default Dashboard