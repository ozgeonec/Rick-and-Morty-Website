import Layout from "../../components/layout";
import Head from "next/dist/next-server/lib/head";
import unfetch from "isomorphic-fetch";

function CharacterDetail(){
    return(
        <Layout>
            <Head>
                <title>krtr</title>
            </Head>
        </Layout>
    )
}

export async function getStaticProps() {
    // will be passed to the page component as props/data fetching
    // const data = await unfetch("https://rickandmortyapi.com/api/character" +id)
    // const character = await data.json()
    //console.log(characters)
    return {
        props: {
            // characters
        },
    }
}