import React from 'react'
import styled from 'styled-components'

const MessagesWrapper = styled.div`
    flex: .4;
    overflow-y: scroll;
    flex-grow: 1;
    margin-left: 10px;
    margin-top: 80px;
`

function Messages() {
    return (
        <MessagesWrapper>
            <h1>"Hello. This is the coolest thing in the world"</h1>
        </MessagesWrapper>
    )
}

export default Messages
