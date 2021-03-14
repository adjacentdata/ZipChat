import React from 'react'
import styled from 'styled-components'

const UserMessageWrapper = styled.div`

`


function UserMessage({message, timestamp, user, userImg}) {
    return (
        <UserMessageWrapper>
            <img src={userImg} alt=""/>

        </UserMessageWrapper>
    )
}

export default UserMessage
