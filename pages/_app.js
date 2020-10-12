import React , {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        let liff = window.liff;
        (async ()=>{
            await liff.init({ liffId: '1655092671-9LGkOlGY' });
            if (liff.isLoggedIn()) {
                const profile = await liff.getProfile();
                console.log(profile);
            }
        })();
    }, [])
    

    return <Component {...pageProps} />
}

export default MyApp