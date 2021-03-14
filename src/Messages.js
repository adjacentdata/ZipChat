import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';
import { returnChannelId } from './features/appSlice';
import InputBox from './InputBox'
import { database } from './firebase_console';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore'

const MessagesWrapper = styled.div`
    flex: .4;
    overflow-y: scroll;
    flex-grow: 1;
    margin-top: 70px;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid lightblue;
    padding: 10px;
    height: 5vh;
    background-color: #8ac4d0;
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

const AllMessages = styled.div`

`

function Messages() {
    const channelId = useSelector(returnChannelId)
    const [channelDetails] = useCollection(channelId && database.collection('Channel').doc(channelId));
    const [channelMessages] =  useDocument(channelId && database.collection("Channel").doc(channelId).collection("messages").orderBy("timestamp", "asc"));
    return (
        <MessagesWrapper>
            <div>
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
                        const {message, timestamp, user, userImage} = doc.data();
                        return
                        <MainMessage
                            id = {doc.id}
                            message= {message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                    })}
                </AllMessages>
                <InputBox channelId={channelId} channelName={channelDetails?.data().name}/>
            </div>
        </MessagesWrapper>
    )
}

export default Messages
