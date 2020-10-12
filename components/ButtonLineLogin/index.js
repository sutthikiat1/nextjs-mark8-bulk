import React , {useEffect} from 'react'
import styled from 'styled-components';

function ButtonLineLogin() {

        const LoginLine = async ()=>{
        if (!liff.isLoggedIn()) {
            liff.login({ redirectUri: "https://nextjs-sutthikiat.netlify.app/" });
        } else {
            liff.getFriendship().then((data)=>{
                console.log(data);
                if (data.friendFlag) {
                    // something you want to do
                  }
            })
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
