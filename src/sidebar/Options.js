import React from 'react'
import styled from 'styled-components'
import { database } from '../firebase_console'
import {useDispatch} from 'react-redux'
import {enter} from '../features/appSlice'
const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    :hover{
        opacity:.5;
        background-color: grey;
    }

    > h4 {
        font-weight:300;
    }

    > h4 > span {
        padding: 10px;

    }
`
const SidebarOption = styled.div`
    font-size: 15px;
    padding-top: 5px;

`

function Options({addChannel, Icon, text, chatId}) {
    const dispatch = useDispatch()
    const openChannel = () => {
        if(chatId){
            dispatch(enter({channelId: chatId}));
        }
    }
    const handleChannel = () =>{
        const addedChannel = prompt('New Channel Name:');

        if(addedChannel) {
            database.collection("Channel").add({name:addedChannel})
        };
    }
    return (
        <OptionsWrapper onClick={addChannel ? handleChannel : openChannel }>
            {Icon && <Icon fontSize="large" style={{padding: 10}}/>}
            {Icon ? (<h4>{text}</h4>) : (
                <SidebarOption>
                    <span>#</span> {text}
                </SidebarOption>
            )}
        </OptionsWrapper>
    )
}

export default Options
