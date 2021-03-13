import React from 'react'
import Options from "./Options"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import MessageIcon from '@material-ui/icons/Message';
import CommentIcon from '@material-ui/icons/Comment';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ScheduleIcon from '@material-ui/icons/Schedule';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import styled from 'styled-components'
import { database } from '../firebase_console'
import {useCollection} from 'react-firebase-hooks/firestore'

const SidebarWrapper = styled.div`
    max-width: 260px;
    min-width: 250px;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    border: black solid 2px;
    margin-top: 70px;
    color: white;


`
const SidebarUserHeader = styled.div`
    display: flex;
    padding: 10px;
    width: 250px;
    border-bottom: 1px solid black;
    > .MuiSvgIcon-root{
        border-radius:50%;
        font-size: 35px;
        background-color: white;
        color: grey;
        padding: 5px;
    }
    > hr {
        font-weight: 300;
    }
`
const SidebarUserInfo = styled.div`
    flex: 1;
    > h3{
        font-size: 20px;
        margin-bottom: 5px;
        font-weight: 900;
    }
    > h4{
        display: flex;
        align-items: center;
    }
    > h4 > .MuiSvgIcon-root{
        color: #39ff14;
        text-shadow: 2px 2px 2px black;
        margin-right: 2px;
    }
`

function Sidebar() {
    const [channels, loading, err ] = useCollection(database.collection("Channel"))

    return (
        <SidebarWrapper>
            <SidebarUserHeader>
                <SidebarUserInfo>
                    <h3>JoEthBertQ</h3>
                    <h4><FiberManualRecordIcon/>JosephEthber Quentonius</h4>
                </SidebarUserInfo>
                <BorderColorIcon/>
            </SidebarUserHeader>
            <Options Icon={CommentIcon} text="Threads"/>
            <Options Icon={MessageIcon} text="Mentions"/>
            <Options Icon={BookmarkIcon} text="Bookmark"/>
            <Options Icon={FavoriteIcon} text="Favorites"/>
            <Options Icon={ScheduleIcon} text="Mentions"/>
            <Options Icon={KeyboardArrowUpIcon} text="Show less"/>
            <hr/>
            <Options Icon={ArrowDownwardIcon} text="Channels"/>
            <hr/>
            <Options Icon={PlusOneIcon} text="Add Channels" addChannel />
            <hr/>
            {channels?.docs.map(doc => (
                <Options chatId={doc.id} text={doc.data().name} />
            )) }
        </SidebarWrapper>
    )
}

export default Sidebar
