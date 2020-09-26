import Head from 'next/head'


function Layout({children}){
    return(
        <div>
            <Head>
                <title>My Web</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>{children}</main>
        </div>
    )
}

export default Layout