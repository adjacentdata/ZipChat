import React from 'react'
import styled from 'styled-components'

const UserMessageWrapper = styled.div`

`
const UserInfo =styled.div`

`

function UserMessage({message, timestamp, username, userImg}) {
    return (
        <UserMessageWrapper>
            <img src={userImg} alt=""/>
            <UserInfo>
                <h3>
                    {username} <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </h3>
                <p>{message}</p>
            </UserInfo>
        </UserMessageWrapper>
    )
}

export default UserMessage
