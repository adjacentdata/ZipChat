import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';
import { returnChannelId } from './features/appSlice';

const MessagesWrapper = styled.div`
    flex: .4;
    overflow-y: scroll;
    flex-grow: 1;
    margin-left: 10px;
    margin-top: 80px;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    padding: 10px;
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
    return (
        <MessagesWrapper>
            <div>
                <Top>
                    <TopLeft>
                        <h3>Channel Name</h3>
                        <FavoriteBorderIcon/>
                    </TopLeft>
                    <TopRight>
                        <p><InfoIcon/>Info</p>
                    </TopRight>
                </Top>
                <AllMessages>

                </AllMessages>
            </div>
        </MessagesWrapper>
    )
}

export default Messages
