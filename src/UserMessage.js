import React from 'react'
import styled from 'styled-components'

const UserMessageWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    height: auto;
    border: 1px solid grey;
    > img {
        height: 30p
    }
`
const UserInfo =styled.div`
    > h3{
        font-size: 12px;
    }
    > h3 > span {
        font-size: 10px;
        color: blue;
        font-weight: 50
    }

    > p {
        font-size: 10px;
    }
`

function UserMessage({message, timestamp, username}) {
    return (
        <UserMessageWrapper>
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
