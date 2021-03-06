import React from 'react'
import styled from "styled-components"
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {Avatar} from "@material-ui/core"

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

const Header_Main = styled.div`
    color: red;
`;

const Left = styled.div`

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
