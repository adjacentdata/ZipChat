import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import styled from 'styled-components'

const SidebarWrapper = styled.div`
    max-width: 260px;
    background-color: var(--primary-color);
    display: flex;
    flex: .2;
    border: black solid 2px;
    margin-top: 70px;
    color: white;

`
const SidebarUserHeader = styled.div`
    display: flex;
    padding: 10px;

    > .MuiSvgIcon-root{
        border-radius: 999px;
        font-size: 50px;
        background-color: white;
        color: grey;
        padding: 10px
    }
`
const SidebarUserInfo = styled.div`
    > h4 > .MuiSvgIcon-root{
        color: #39ff14;
        text-shadow: 2px 2px 2px black;
    }
`

function Sidebar() {
    return (
        <SidebarWrapper>
            <SidebarUserHeader>
                <SidebarUserInfo>
                    <h3>Scrotcherino</h3>
                    <h4><FiberManualRecordIcon/>Scott Ishizu</h4>
                </SidebarUserInfo>
                <BorderColorIcon/>
            </SidebarUserHeader>
        </SidebarWrapper>
    )
}

export default Sidebar
