import React, { useRef} from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';
import { returnChannelId } from './features/appSlice';
import InputBox from './InputBox'
import { database } from './firebase_console';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore'
import UserMessage from './UserMessage'

const MessagesWrapper = styled.div`
    flex: .3;
    margin-top: 70px;
    overflow-y: scroll;
    flex-grow: 1;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid lightblue;
    padding: 13px;
    height: 7vh;
    background-color: #8ac4d0;
    position:relative;
`

const TopRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    > p > .MuiSvgIcon-root{
        margin-right: 5px;
    }
`
const TopLeft = styled.div`
    display: flex;
    > h4 {
        display: flex;
    }
    > h4 > .MuiSvgIcon-root {
        font-size: 15px;
    }
`
const ChatEnd = styled.div`
    padding: 20px;
    border: 1px green solid;
`

const AllMessages = styled.div`

`

function Messages() {
    const channelId = useSelector(returnChannelId)
    const endRef = useRef(null)
    const [channelDetails] = useCollection(channelId && database.collection('Channel').doc(channelId));
    const [channelMessages, loading] =  useDocument(channelId && database.collection("Channel").doc(channelId).collection("messages").orderBy("timestamp", "asc"));

    return (
        <MessagesWrapper>
            <Top>
                <TopLeft>
                    <h3><i>Conference: </i>{channelDetails?.data().name}</h3>
                    <FavoriteBorderIcon/>
                </TopLeft>
                <TopRight>
                    <p><InfoIcon/>Info</p>
                </TopRight>
            </Top>
            <AllMessages>
                <div>
                    {channelMessages?.docs.map(doc => {
                        const {message, timestamp, username, userImg} = doc.data();
                        return(
                        <UserMessage
                            key = {doc.id}
                            message= {message}
                            timestamp={timestamp}
                            username={username}
                            userImg={userImg}
                        />)
                    })}
                    <ChatEnd ref={endRef}/>
                </div>

            </AllMessages>
            <InputBox channelId={channelId} channelName={channelDetails?.data().name}/>

        </MessagesWrapper>
    )
}

export default Messages
