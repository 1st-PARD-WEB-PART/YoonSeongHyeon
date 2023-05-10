import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Basic = styled.div`
width:1260.3px;
height:600px;
background-color: #F0F2F5;
`

const Text = styled.h1`
width: 300px;
height: 150px;
color: #1877F2;
font-size:80px;
margin-top: 150px;
margin-left: 515px;
`

function Game() {
    return (
        <Basic>
            <Navbar />
            <Text>Game</Text>
        </Basic>
    );
}

export default Game;