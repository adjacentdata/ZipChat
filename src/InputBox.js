import { Button, TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

const InputBoxWrapper = styled.div``

function InputBox(channelId, channelName) {
    return (
        <InputBoxWrapper>
            <form>
                <TextField
                    id="outlined-multiline-static"
                    label="Enter message here"
                    variant='outlined'
                    multiline
                    rows={1}
                    defaultValue="Default Value"
                    style={{width: "90%"}}
                />
                <Button>
                    <SendIcon/>
                </Button>
            </form>
        </InputBoxWrapper>
    )
}

export default InputBox
