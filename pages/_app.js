import React , {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const liff = window.liff;
        liff.init({ liffId: '1655092671' });
    }, [])
    

    return <Component {...pageProps} />
}

export default MyApp