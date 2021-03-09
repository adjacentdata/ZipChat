import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styled from 'styled-components'

const SidebarWrapper = styled.div`
    max-width: 260px;
    background-color: var(--primary-color);
    display: flex;
    flex: .2;
    border: black solid 2px;
    margin-top: 60px;

`
const SidebarUserHeader = styled.div``
const SidebarUserInfo = styled.div``

function Sidebar() {
    return (
        <SidebarWrapper>
            <SidebarUserHeader>
                <SidebarUserInfo>
                    <h3>TreeBees</h3>
                    <h4><FiberManualRecordIcon/>Scott Ishizu</h4>
                </SidebarUserInfo>
            </SidebarUserHeader>
        </SidebarWrapper>
    )
}

export default Sidebar
