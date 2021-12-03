import React, {useContext, useState} from "react";
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
    //context
    const userObject = useContext(myContext)
    console.log(userObject)

    //state
    const [userLvl, setUserLvl] = useState('0-10')
    const [userPrimary, setUserPrimary] = useState('firestaff')
    const [userSecondary, setUserSecondary] = useState('firestaff')
    const [userCrafting, setUserCrafting] = useState('weaponsmithing')
    const [userCraftingLvl, setUserCraftingLvl] = useState('0-25')
    const [userBio, setUserBio] = useState('')

    //event handlers
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
    <form onSubmit={handleSubmit}>
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
                        <option value='Agency'>The Agency</option>
                        <option value='Buero'>The Buero</option>
                    </Select>
                </Company>

                <Sections>
                    <Headings>Level</Headings>
                    <Headings>Primary</Headings>
                    <Headings>Secondary</Headings>
                    <Headings>Crafting</Headings>
                    <Headings>Crafting lvl</Headings>
                </Sections>

                <CharacterInfo>

                    {/*  Making sure the State works ;)
                    {console.log('LVL:',userLvl)}
                    {console.log('PRIMARY:',userPrimary)}
                    {console.log('SECONDARY:',userSecondary)}
                    {console.log('CRAFTING:',userCrafting)}
                    {console.log('CRAFTINGLVL:',userCraftingLvl)}
                    {console.log('BIO:',userBio)}
                    */}

                    <Select 
                    value={userLvl}
                    onChange={(e) => setUserLvl(e.target.value)}
                    >
                        <option value='0-10'>0-10</option>
                        <option value='10-20'>10-20</option>
                        <option value='20-30'>20-30</option>
                        <option value='30-40'>30-40</option>
                        <option value='40-50'>40-50</option>
                        <option value='50-60'>50-60</option>
                        <option value='60'>60+</option>
                    </Select>
                    <Select
                    value={userPrimary}
                    onChange={(e) => setUserPrimary(e.target.value)}
                    >
                        <option value='firestaff'>FireStaff</option>
                        <option value='icegauntlet'>IceGauntlet</option>
                        <option value='lifestaff'>LifeStaff</option>
                        <option value='bow'>Bow</option>
                        <option value='musket'>Musket</option>
                        <option value='rapier'>Rapier</option>
                        <option value='hatchet'>Hatchet</option>
                        <option value='sword/shield'>Sword/Shield</option>
                        <option value='spear'>Spear</option>
                        <option value='great axe'>Great Axe</option>
                        <option value='war hammer'>War Hammer</option>
                    </Select>
                    <Select
                    value={userSecondary}
                    onChange={(e) => setUserSecondary(e.target.value)}
                    >
                        <option value='firestaff'>FireStaff</option>
                        <option value='icegauntlet'>IceGauntlet</option>
                        <option value='lifestaff'>LifeStaff</option>
                        <option value='bow'>Bow</option>
                        <option value='musket'>Musket</option>
                        <option value='rapier'>Rapier</option>
                        <option value='hatchet'>Hatchet</option>
                        <option value='sword/shield'>Sword/Shield</option>
                        <option value='spear'>Spear</option>
                        <option value='great axe'>Great Axe</option>
                        <option value='war hammer'>War Hammer</option>
                    </Select>
                    <Select
                    value={userCrafting}
                    onChange={(e) => setUserCrafting(e.target.value)}
                    >
                        <option value='weaponsmithing'>Weaponsmithing</option>
                        <option value='armoring'>Armoring</option>
                        <option value='engineering'>Engineering</option>
                        <option value='jewelcrafting'>Jewelcrafting</option>
                        <option value='arcana'>Arcana</option>
                        <option value='cooking'>Cooking</option>
                        <option value='furnishing'>Furnishing</option>
                    </Select>
                    <Select
                    value={userCraftingLvl}
                    onChange={(e) => setUserCraftingLvl(e.target.value)}
                    >
                        <option value='0-25'>0-25</option>
                        <option value='25-50'>25-50</option>
                        <option value='50-75'>50-75</option>
                        <option value='75-100'>75-100</option>
                        <option value='100-125'>100-125</option>
                        <option value='125-150'>125-150</option>
                        <option value='150-175'>150-175</option>
                        <option value='175-200'>175-200</option>
                        <option value='200+'>200+</option>
                    </Select>
                </CharacterInfo>
            </CompanyWrapper>

            <BioWrapper>
                <Bio 
                placeholder='Add a Bio!'
                value={userBio}
                onChange={(e) => setUserBio(e.target.value)}
                >
                    
                </Bio>
                <Button type='submit' value='submit'>Update</Button>
            </BioWrapper>
            
        </Wrapper>
    </form>
    )
}


//avatars/user_id/user_avatar.png * -user format for img
//https://cdn.discordapp.com/ -base url
export default ProfileDashboard