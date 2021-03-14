import { Button} from '@material-ui/core'
import {React, useRef} from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import {database} from './firebase_console'
import firebase from 'firebase'
const InputBoxWrapper = styled.div`
    border-radius: 2px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    >form > input {
        border: 1px solid lightblue;
        bottom: 20px;
        position: fixed;
    }

`

function InputBox(channelId, channelName) {
    const messageRef = useRef(null);

    const handleMessageSent = e => {
        e.preventDefault();

        if (channelId) {
            return false;
        }

        database.collection('Channel').doc(channelId).collection('messages').add({
            message: messageRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })


    }

    return (
        <InputBoxWrapper>
            <form>
                <input
                    id="outlined-multiline-static"
                    label="Enter message here"
                    variant='outlined'
                    multiline
                    rows={1}
                    style={{width: "90%" }}
                />
                <Button hidden type='submit' onClick={handleMessageSent}>
                    <SendIcon/>
                </Button>
            </form>
        </InputBoxWrapper>
    )
}

export default InputBox
