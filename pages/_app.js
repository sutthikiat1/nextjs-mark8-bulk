import React , {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        let liff = window.liff;
        (async ()=>{
            await liff.init({ liffId: '1655092671-9LGkOlGY' });
        })();
    }, [])
    

    return <Component {...pageProps} />
}

export default MyApp