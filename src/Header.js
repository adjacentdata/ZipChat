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

const HeaderMain = styled.div`
    display: flex;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background-color: var(--primary-color);
    color: white;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    flex: .3;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`

const HeaderAvatar = styled(Avatar)`
    :hover{
        cursor: pointer;
        color: blue;
    }
`
const HeaderSearchBar = styled.div`
    flex: .4;
    border: 2px solid black;
    border-radius: 15px;
    height: 20px;
`

function Header() {
    return (
        <HeaderMain>
            <Left>
                <HeaderAvatar
                //TODO onclick
                />
                <QueryBuilderIcon/>
            </Left>
            <HeaderSearchBar>
                    <input placeholder="Search"/>
            </HeaderSearchBar>
        </HeaderMain>
    )
}

export default Header
