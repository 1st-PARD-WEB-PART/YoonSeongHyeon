import styled from 'styled-components';
import { MdOutlineHome } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { RiGamepadLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Facebook_logo from './Facebook_logo.png';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Bar = styled.form`
background-color: #FFFFFF;
display: flex;
align-items: center;
width: 1260px;
height: 45px;
`

const Logo = styled(FaFacebook)`
width: 32px;
height: 32px;
color: #1877f2;
margin-left: 10px;
`

const Search = styled.input`
background-color: #F0F2F5;
width: 127px;
height: 25px;
border: none;
border-radius: 15px;
margin-left: 5px;
`

const SearchBtton = styled.button`
background-color: #1877F2;
width: 43px;
height: 31px;
color: #FFFFFF;
margin-left: 5px;
border: none;
border-radius: 15px;
`
const Home = styled(MdOutlineHome)`
/* color: ${props => props.color || '#717171'}; */
width: 25px;
height: 25px;
margin-top: 2px;
margin-left: 290px;
`
const People = styled(IoPeopleCircleOutline)`
/* color: ${props => props.color || '#717171'}; */
width: 25px;
height: 25px;
margin-top: 2px;
margin-left: 80px;
`
const Game = styled(RiGamepadLine)`
/* color: ${props => props.color || '#717171'}; */
width: 25px;
height: 25px;
margin-top: 2px;
margin-left: 80px;
`

const Line = styled.div`
  width: 50px;
  height: 3px;
  background-color: #2374E1;
  /* margin-left: 277px; */
  margin-left: ${props => props.margin};
  display: ${props => props.show ? 'block' : 'none'};
`

function Navbar() {
    const location = useLocation();
    const [clicked, setClicked] = useState(location.pathname);

    const handleClick = (path) => {
        setClicked(path);
    };


    return (
        <Bar>
            <Logo />;
            <Search type="text" name="text" placeholder='Facebook 검색' />
            <SearchBtton>검색</SearchBtton>
            <Link to="/home">
                <Home color={clicked === '/home' ? '#2374E1' : '#717171'}
                    onClick={() => handleClick('/home')} />
                <Line margin="277px" show={clicked === '/home'} />
            </Link>

            <Link to="/people">
                <People color={clicked === '/people' ? '#2374E1' : '#717171'}
                    onClick={() => handleClick('/people')} />
                <Line margin="67px" show={clicked === '/people'} />

            </Link>

            <Link to="/game">
                <Game color={clicked === '/game' ? '#2374E1' : '#717171'}
                    onClick={() => handleClick('/game')} />
                <Line margin="67px" show={clicked === '/game'} />
            </Link>

        </Bar>
    )
}

export default Navbar;