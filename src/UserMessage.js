import React from 'react'
import styled from 'styled-components'

const UserMessageWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    height: auto;
    border: 1px solid grey;
    > img {
        height: 30px;
    }
`
const UserInfo =styled.div`
    > h3 > span {
        font-size: 15px;
        color: blue;
        font-weight: 50
    }
`

function UserMessage({message, timestamp, username, userImg}) {
    return (
        <UserMessageWrapper>
            <img src={userImg} alt=""/>
            <UserInfo>
                <h3>
                    {username} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h3>
                <p>{message}</p>
            </UserInfo>
        </UserMessageWrapper>
    )
}


export default UserMessage
