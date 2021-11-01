import React, {useContext} from "react";
import styled from "styled-components";
import { myContext } from "../Context";

const Wrapper = styled.div`
    position:absolute;
    width:50%;
    height:94.5%;
    display:flex;
    flex-flow:column nowrap;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
    left:0;
    right:0;
    z-index:1;
    background-color:rgba(46, 49, 49, 1);
`

const UserWrapper = styled.div`
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content:space-evenly;
    width:100%;
    height:33.3%;
`
const CompanyWrapper = styled.div`
    width:100%;
    height:33.3%;
    display:flex;
    flex-flow: row nowrap;
    align-items:start;
    justify-content:center;
`

const BioWrapper = styled.div`
    width:100%;
    height:33.3%;
    display:flex;
    flex-flow: row nowrap;
    justify-content:center;
`

const UserName = styled.div`
    border: 1px solid grey;
    height: 50px;
    min-width:300px;
    max-width:400px;
    width: auto;
    align-self:end;
    margin-bottom:8%;
    overflow-x:auto;
    text-align:center;
    color:white;
`

const ProfilePic = styled.div`
    border: 1px solid grey;
    height: 250px;
    width: 250px;
    border-radius: 50%;
`

const Company = styled.div`
    border: 1px solid grey;
    height: 50px;
    min-width:200px;
    max-width:600px;
    width: auto;
    overflow-x:auto;
    margin-top:70px;
`

const Bio = styled.div`
    margin-top:50px;
    border: 1px solid grey;
    min-height: 80px;
    height:150px;
    min-width:600px;
    max-height: 80%;
    max-width: 90%;
`

const ProfileDashboard = () => {
    const userObject = useContext(myContext)

    return(
        <Wrapper>
            <UserWrapper>
                <UserName>
                    {userObject.username}
                </UserName>
                <ProfilePic>
pic
                </ProfilePic>
            </UserWrapper>

            <CompanyWrapper>
                <Company>
                    
                </Company>
            </CompanyWrapper>

            <BioWrapper>
                <Bio>
bio
                </Bio>
            </BioWrapper>
        </Wrapper>
    )
}

export default ProfileDashboard