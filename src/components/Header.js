import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon/>
                <SearchContainer>
                    <Search>
                        <input type='text' 
                        placeholder="Search..." />
                    </Search>
                </SearchContainer>
                
                <HelpOutlineIcon>

                </HelpOutlineIcon>
            </Main>
            <UserConainer>
                <Name>
                    Si Lam
                </Name>
                <UserImage>
                    <img alt='' src="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
            </UserConainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: #350d36;
    color: white;
    display:flex;
    align-item: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    box-shodow: 0 1px 0 0 rgb(255 255 255 / 10%); 
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
   


`
const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);

    border-radius: 6px;

    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top: 4px;
        padding-botton: 4px;
    }

    input: focus {
        outline: none;
    }

`
////////////////////////
const Main = styled.div`

    display: flex;
    margin-right: 16px;
    margin-left: 16px;



`
/////////////////////////////
const UserConainer = styled.div`

    display: flex;
    align-item: center;
    padding-right: 16px;
    position: absolute;
    right: 0;

`
////////////////////////////
const Name = styled.div`

    padding-right: 16px;




`

const UserImage = styled.div`

    width: 28px;
    height: 28px;
    border: 2px solid white;

    borer-radius: 3px;
    img {
        width: 100%;
    }


`