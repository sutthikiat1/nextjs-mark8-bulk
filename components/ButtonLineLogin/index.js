import React , {useEffect} from 'react'
import styled from 'styled-components';

function ButtonLineLogin() {
        const LoginLine = async ()=>{
        console.log(liff.isLoggedIn())
        // const friend = liff.getFriendship();

        if (!liff.isLoggedIn()) {
            liff.login({ redirectUri: "http://localhost:3000" });
        } else {
            await liff.getFriendship();
        }
    }

    return (
        <ButtonLogin onClick={()=>LoginLine()}>
            Line Login
        </ButtonLogin>
    )
}

const ButtonLogin = styled.div`
    width : 100px;
    color : #fff;
    background-color : #00b900;
    border-radius : 10px;
    text-align : center;
    cursor : pointer;
`

export default ButtonLineLogin
