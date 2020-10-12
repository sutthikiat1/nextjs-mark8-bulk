import React , {useEffect , useState} from 'react'
import styled from 'styled-components';

function ButtonLineLogin() {
    const [useLogin , setLogin] = useState(false);
    const [isAddFriend , setAddFriend] = useState(false);

    useEffect(()=>{
        (async ()=>{
            await liff.init({ liffId: '1655092671-9LGkOlGY' });
            if (liff.isLoggedIn()) {
                setLogin(true);
                const profile = await liff.getProfile();
                console.log(profile);
            } else {
                setLogin(false);
            }
        })();
    })
    
    const LoginLine = async ()=>{
        if (!liff.isLoggedIn()) {
            liff.login({ redirectUri: "https://nextjs-sutthikiat.netlify.app/" });
        } else {
            const friend = await liff.getFriendship();
            if (!friend.friendFlag) {
                window.location = 'https://line.me/R/ti/p/@463wmqij';
            } else {
                alert('You get the code :: 1412')
            }
            
        }
    }

    return (
        <ButtonLogin onClick={()=>LoginLine()}>
            {useLogin ? isAddFriend ? 'Get Code' : 'Add Friend' : 'Line Login'}
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
