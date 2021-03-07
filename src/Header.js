import React from 'react'
import styled from "styled-components"
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {Avatar} from "@material-ui/core"

// Styled Components Sample
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

const Header_Main = styled.div`
    display: flex;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`

const Header_Avatar = styled(Avatar)`

`

function Header() {
    return (
        <Header_Main>
            <Left>
                <Header_Avatar
                //TODO onclick
                />
                <QueryBuilderIcon/>
            </Left>
        </Header_Main>
    )
}

export default Header
