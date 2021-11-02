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
    flex-flow:column nowrap;
    align-items:center;
    justify-content:start;
`

const BioWrapper = styled.div`
    width:100%;
    height:33.3%;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
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

const ProfilePic = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
`

const Company = styled.div`
    width: 15%;
    height:auto;
    margin-top:70px;
    background-color:rgba(66, 69, 69, 1);
`

const CharacterInfo = styled.div`
    width:100%;
    text-align:center;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-evenly;
`
const Sections = styled.div`
    width:100%;
    height:50px;
    margin-top:50px;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-evenly;
`

const Headings = styled.div`
    width:150px;
    height:50px;
    text-align:center;
    color:white;
`

const Select = styled.select`
    width:150px;
    height:50px;
    border:none;
    text-align:center;
    font-size:20px;
    background-color:rgba(66, 69, 69, 1);
    color:white;
    border:1px solid grey;
    option {
        width:100%;
        height:100%;
    }
`

const Bio = styled.textarea`
    border: 1px solid grey;
    min-height: 80px;
    height:150px;
    min-width:600px;
    max-height: 80%;
    max-width: 90%;
    background-color:rgba(66, 69, 69, 1);
    font-size:24px;
    color:white;
    padding:0.5rem;
    margin-bottom:1rem;
`
const Button = styled.button`
    margin-top:1rem;
    margin-bottom:0.5rem;
    min-width:100px;
    min-height:30px;
    border:1px solid grey;
`

const ProfileDashboard = () => {

    const userObject = useContext(myContext)
    console.log(userObject)
    
    return(
    <form>
        <Wrapper>
            <UserWrapper>
                <UserName>
                    {userObject.username}
                </UserName>
                <ProfilePic src={`https://cdn.discordapp.com/avatars/${userObject.discordId}/${userObject.avatar}`} alt='Avatar'>
                    
                </ProfilePic>
            </UserWrapper>
            
            <CompanyWrapper>
                <Company>
                    <Select>
                        <option value='0'>The Agency</option>
                        <option value='1'>The Buero</option>
                    </Select>
                </Company>

                <Sections>
                    <Headings>Level</Headings>
                    <Headings>Main</Headings>
                    <Headings>Secondary</Headings>
                    <Headings>Crafting</Headings>
                    <Headings>Crafting lvl</Headings>
                </Sections>

                <CharacterInfo>
                    <Select>
                        <option value='0'>0-10</option>
                        <option value='1'>10-20</option>
                        <option value='1'>20-30</option>
                        <option value='1'>30-40</option>
                        <option value='1'>40-50</option>
                        <option value='1'>50-60</option>
                        <option value='1'>60+</option>
                    </Select>
                    <Select>
                        <option value='0'>FireStaff</option>
                        <option value='1'>IceGauntlet</option>
                        <option value='0'>LifeStaff</option>
                        <option value='1'>Bow</option>
                        <option value='0'>Musket</option>
                        <option value='1'>Rapier</option>
                        <option value='0'>Hatchet</option>
                        <option value='1'>Sword/Shield</option>
                        <option value='0'>Spear</option>
                        <option value='1'>Great Axe</option>
                        <option value='0'>War Hammer</option>
                    </Select>
                    <Select>
                        <option value='0'>FireStaff</option>
                        <option value='1'>IceGauntlet</option>
                        <option value='0'>LifeStaff</option>
                        <option value='1'>Bow</option>
                        <option value='0'>Musket</option>
                        <option value='1'>Rapier</option>
                        <option value='0'>Hatchet</option>
                        <option value='1'>Sword/Shield</option>
                        <option value='0'>Spear</option>
                        <option value='1'>Great Axe</option>
                        <option value='0'>War Hammer</option>
                    </Select>
                    <Select>
                        <option value='0'>Weaponsmithing</option>
                        <option value='1'>Armoring</option>
                        <option value='0'>Engineering</option>
                        <option value='1'>Jewelcrafting</option>
                        <option value='0'>Arcana</option>
                        <option value='1'>Cooking</option>
                        <option value='0'>Furnishing</option>
                    </Select>
                    <Select>
                        <option value='0'>0-25</option>
                        <option value='1'>25-50</option>
                        <option value='0'>50-75</option>
                        <option value='1'>75-100</option>
                        <option value='0'>100-125</option>
                        <option value='1'>125-150</option>
                        <option value='0'>150-175</option>
                        <option value='1'>175-200</option>
                        <option value='0'>200+</option>
                    </Select>
                </CharacterInfo>
            </CompanyWrapper>

            <BioWrapper>
                <Bio placeholder='Add a Bio!'>
                    
                </Bio>
                <Button>Update</Button>
            </BioWrapper>
            
        </Wrapper>
    </form>
    )
}


//avatars/user_id/user_avatar.png * -user format for img
//https://cdn.discordapp.com/ -base url
export default ProfileDashboard