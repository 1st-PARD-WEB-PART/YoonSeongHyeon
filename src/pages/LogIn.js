import React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { Form, Link } from 'react-router-dom';

const Basic = styled.div`
    background-color: red;   
`

const Title = styled.h1`
    position: absolute;
    margin-left: 170px;
    margin-top: 110px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 97px;
    text-align: center;
    color: #1877F2;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `;

const Intro = styled.p`
    position: absolute;
    margin-left: 170px;
    margin-top: 190px;

    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 38px;
    letter-spacing: 0.035em;
    color: #1C1E21;
`;

const Log = styled.form`
    position: absolute;
    width: 352px;
    height: 318px;
    margin-left: 756px;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #ffffff;
`
const InputE = styled.input`
    margin: atuo;
    display: block;
    width: 285px;
    height: 40px;
    margin-left: 32px;
    margin-top: 30px; 
    border-radius: 10px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #8A8D91;
`;

const InputP = styled.input`
    margin: atuo;
    display: block;
    width: 285px;
    height: 40px;
    margin-left: 32px;
    margin-top:-5px;
    border-radius: 10px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #8A8D91;
`;


const Button1 = styled.button`
    width: 295px;
    height: 40px;
    margin-left: 32px;
    margin-top: 20px;
    background: #1877F2;
    border-radius: 10px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
`;

const Forgot = styled.p`
    width: 142px;
    height: 16.77px;
    margin-left: 112px;
    margin-top: 25px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #1877F2;
`

const Button2 = styled.button`
    width: 295px;
    height: 40px;
    margin-left: 32px;
    margin-top: 10px;
    background: #42B72A;
    border-radius: 10px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
`

const Create = styled.p`
    position: absolute;
    width: 400px;
    height: 40px;
    margin-left: 760px;
    margin-top: 380px;

    font-family: 'Roboto';
    font-style: normal;
    font-size: 16px;
    line-height: 28px;
    color: #1C1E21;
`;

const Info = styled.form`
    position: absolute;
    width: 850px;
    height: 277px;
    margin-left: 40px;
    margin-top: -400px;
    background-color: #ffffff;
`;

const Language = styled.p`
    position: absolute;
    width: 1000px;
    height: 26px;
    margin-left: 100px;
    margin-top: 875px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: #8A8D91;
`;

const Hr = styled.hr`
    position: absolute;
    width: 1100px;
    height: 0px;
    margin-left: 105px;
    margin-top: 890x;
    background: #8A8D91;
`

const Fun = styled.p`
    position: absolute;
    width: 1000px;
    height: -20px;
    margin-left: 100px;
    margin-top: 910px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: #8A8D91;
`;

const Meta = styled.p`
    position: absolute;
    width: 94px;
    height: 19px;
    margin-left: 101px;
    margin-top: 960px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #8A8D91;
`;

function LogIn() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/home");
    };

    return (
        <Basic>
            <Title>Facebook</Title>
            <Intro>Connect with friends and the <br />world around you on Facebook.</Intro>

            <Log>
                <InputE type="email" name="email" placeholder='Email or phone number' /> <br />
                <InputP type="password" name="password" placeholder='Password' />
                <Button1 onClick={onClick}>Login</Button1>

                <Forgot>Forgot Password?</Forgot>
                <Button2>Create new account</Button2>
            </Log>
            <Create><strong>Create a Page</strong> for a celebrity, brand or business.</Create>
            <Info>
                <Language>English (US)
                    Ikinyarwanda
                    Francais (France)
                    Kiswahili
                    Espagnol
                    Deutsch
                    Japanese
                    Portugues (Brazil)
                    Italiano
                    Arabic
                </Language>
                <Fun>
                    Sign Up
                    Facebook Lite
                    Games
                    Oculus
                    Bulletin
                    Services
                    About
                    Developers
                    Log In
                    Watch
                    Marketplace
                    Portal
                    Local
                    Places
                    Create Ad
                    Careers
                    Sign Up
                    Places
                    Facebook Play
                    Instagram
                    Fundraisers
                    Groups
                    Create Page
                    Privacy
                    Log In
                    Messenger
                    Messenger
                    Voting Information Center
                    Cookies
                    Ad choices
                    Terms
                    Help
                </Fun>
                <Meta>
                    Meta © 2023
                </Meta>
            </Info>
        </Basic>
    );
};



export default LogIn;