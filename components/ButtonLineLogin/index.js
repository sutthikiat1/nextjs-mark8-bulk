import React , {useEffect} from 'react'
import styled from 'styled-components';

function ButtonLineLogin() {

    const LoginLine = ()=>{
        liff.login({ redirectUri: "https://nextjs-sutthikiat.netlify.app/" })
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
