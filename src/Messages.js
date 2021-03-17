import React, { useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';
import { returnChannelId } from './features/appSlice';
import InputBox from './InputBox'
import { database } from './firebase_console';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore'
import UserMessage from './UserMessage'
import CancelIcon from '@material-ui/icons/Cancel';

const MessagesWrapper = styled.div`
    flex: .3;
    margin-top: 70px;
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
    }n
    > h4 > .MuiSvgIcon-root {
        font-size: 15px;
    }
`
const ChatEnd = styled.div`
    padding: 100px;
    border: 1px green solid;

`

const AllMessages = styled.div`
    height: 77vh;
    overflow-y: scroll;
`
const NewMessage = styled.div`
    display: flex;
    align-items: center;

`

function Messages() {
    const channelId = useSelector(returnChannelId)
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
            </AllMessages>
            <InputBox channelId={channelId} channelName={channelDetails?.data().name}/>

        </MessagesWrapper>
    )
}

export default Messages
