import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-flow:column nowrap;
    overflow-y:scroll;
`

const Title = styled.div`
    width:100%;
    height:10%;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-items:center;
`

const Body = styled.div`
    width:100%;
    height:90%;
`

const H2 = styled.h2`
    color:black;
    font-size:42px;
`

const Ol = styled.ol`
    width:100%;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;
    align-items:center;
    margin-bottom:0.5rem;
`

const P1 = styled.p`
    color:grey;
    margin-left:5%;
    margin-right:5%;
    margin-bottom:5%;
`

const P2 = styled.p`
    color:black;
    font-size:20px;
`

const H3 = styled.h3`
    color:brown;
    text-align:center;
`

const Li = styled.li`
    color:brown;
    list-style-color:darkgreen;
    list-style-type: upper-roman;
    width:90%;
    max-width:90%;
    text-align:left;
    margin-top:1.5rem;
    margin-left:1rem;
`

export default function HelpRules() {

    return(
        <Wrapper>
            <Title>
                <H2>Rules</H2>
            </Title>
            <Body>
                <P1>Were all here to have fun, getting tilted after wiping in a raid multiple times is perfectly understandable. Know when when you need to take a break and try to be respectful to your teamates. Basically if your being a jerk all the time your gonna get kicked out.</P1>
                <Ol>
                    <Li>
                        <H3>Dont be Disrespectful.</H3>
                    </Li>
                    <Li>
                        <H3>Player Conduct</H3>
                        <P2>
                            We are very proud of our company and what we stand for, and for that, we expect every member to feel the same.
                            When you are chatting in game, posting in forums or other social media, you are acting as a representative of our Clan as you carry the [BFG] Tag with you all the time. Please avoid being whiny, annoying, problematic, or disrespectful in these situations.
                            Once one of our members makes our Clan look bad, people will assume that all of our members behave like that. Not only does it damage your reputation as an individual, it also damages the Clan’s reputation as a whole.
                        </P2>
                    </Li>
                    <Li>
                        <H3>Discord</H3>
                        <P2>
                            Discord is mandatory for all Members when Online / In-Game. NO Exceptions!
                            Our Discord server has multiple channels for those that would like to be less social than others, Although we highly promote a social environment where members can know one another and friendships can be made and maintained. Also for raids being present in discord is mandatory.
                        </P2>
                    </Li>
                    <Li>
                        <H3>Member & Officer Expectations</H3>
                        <P2>
                            <p><b>Members:</b> We expect all Members to Act Maturely, follow the RCOC (Rules & Code Of Conduct) and to respect The Agency Chain of Command.</p>
                            <br />
                            <p>Be creative and positive! If you have ideas for improvement or suggestions, feel free to talk to any Officers or you can also submit your ideas via the Ideas page of our discord.</p>
                            <br />
                            <p>Once you are a part of The Agency, you are now part of a much bigger experience than just yourself and there is no point to your presence in our Community if you are not going to attempt to assist or interact with your fellow company members and/or participate in Official company Events / Operations</p>
                            <br />
                            <p>Its also expected that in certain and non-frequent situations players will have to set aside their personal goals in exchange for company goals. This can materialize in many situations. For example and especially with new content and pushes for world first we will need members to help funnel gear to our highest lvl and skilled players, this is expected and after the push members will be reimbursed for the gear they gave up.</p>
                            <br />
                            <p><b>Officers:</b> Representing The Agency as an Officer is a highly valued privilege that requires a lot of responsibility.</p>
                            <br />
                            As an Officer, people will always be looking for you. If you are absent at an Officer’s Meeting or Company Related Activities, your peers will assume the worst. Oftentimes you will have a good reason to be absent, but always manage your time wisely. Your presence has a positive impact.
                            <br />
                            <p>
                            TEAMWORK: Work and communicate with other Officers within the Company. Do not isolate yourself, Remember that you are part of a team and the absence of teamwork is degrading and destructive.</p>
                            <br />
                            <p>
                            Be constructive and share your ideas on anything you’ve noticed within the Company that needs extra attention. Exercising initiative is the hallmark of an effective Officer. Initiative, or the lack thereof, will demonstrate whether or not you can be relied upon.</p>
                            <br />
                            <p>
                            Also important is keeping The Agency Chain of Command informed. If you fail to complete a task assigned to you despite your best efforts, provide The Agency High Command with a Situation Report. The Agency High Command should not have to pull information from you.</p>
                            <br />
                            <p>
                            If you are found to be abusing your power which includes unnecessarily kicking of members from servers, unfair treatment, favoritism or harassing our members will be subjected to disciplinary actions, suspension and/or termination of your Agency Membership as well as access to all Agency Systems and Services.</p>
                        </P2>
                        </Li>
                        <Li>
                        <H3>FAIR PLAY, NO CHEATING / HACKING / SCAMMING</H3>
                        <P2>
                        <p>The Agency has a Zero Tolerance policy for cheating, hacking/exploits of any type and scams.</p>
                        <br />
                        <p>This rule covers players who use code to manipulate a particular game for the purpose of gaining an unfair advantage over other teams and players. Wall Hacks, Speed Hacks and Aim Bots are just examples of the types of cheats covered by this agreement. “Testing” or “Trying Out” Hack Programs are NOT accepted excuses.</p>
                        <br />
                        <p>To make it short, “Do Not Install or Use Hacks for any Reason“. Attempts at defrauding another member or player by gaining their trust; also called “scamming” is absolutely not tolerated.</p>
                        <br />
                        <p>This includes unfair trades, swapping of account information, acquiring in-game items or any other possession from another member or player through misinformation, confusion or other tricks to fool another member or player in to giving up their in-game items / account in exchange for nothing or less than the mutually agreed upon conditions set by both parties prior to the exchange / trade.</p>
                        <br />
                        <p>Any Agency Member caught / reported using hacks, cheating or scamming other members / players will be reported to the Game Developer(s) and will have their Agency Membership terminated as well as access to all Company Systems and Services.</p>
                        <br />
                        <p>Violation of this rule will also result to a Lifetime Ban and your information be shared to our allies and/or any third party, whenever deemed necessary.</p>
                        </P2>
                    </Li>
                    <Li>
                        <H3>THREE (3) STRIKES POLICY</H3>
                        <P2>
                        <p>Unless specified otherwise, any violation of the BFG RCOC (Rules & Code of Conduct) will be disciplined using a “Three Strikes System”.</p>
                        <br />
                        <p>On your First Offense, you will receive a Specific and Detailed Warning from any of our Officers.</p>
                        <br />
                        <p>On your Second Offense, you will be requested to attend a hearing along with The Agency High Command Officers and depending on the outcome of the hearing; you may be given a temporary suspension from the Company.</p>
                        <br />
                        <p>On your Third Offense, you may be given another temporary suspension or permanent termination of your Agency Membership depending on the severity of the violation(s) and as determined by The Agency High Command Officers.</p>
                        <br />
                        <p>If an Agency Member with previous offenses shows good behavior for a period of Six (6) Months after their First or Second offense, their strikes will be reset back to Zero (0).</p>
                        <br />
                        <p ><i style={{fontSize:'18px'}}>THE AGENCY RESERVES THE RIGHT, AT ITS SOLE AND ABSOLUTE DISCRETION, TO SUSPEND OR TERMINATE YOUR AGENCY MEMBERSHIP AND/OR ACCESS TO ANY AGENCY SYSTEMS / SERVICES AND THE RIGHT TO FINAL INTERPRETATION OF THE AGENCY RCOC (RULES & CODE OF CONDUCT).</i></p>
                        </P2>
                    </Li>
                </Ol>
            </Body>
        </Wrapper>
    )
}