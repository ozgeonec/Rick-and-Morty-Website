import Layout from "../../components/layout";
import Head from "next/dist/next-server/lib/head";
import unfetch from "isomorphic-fetch";

function CharacterDetail({character}){
    return(
        <Layout>
            <Head>
                <title>{character.name}</title>
            </Head>
            <h1>{character.name}</h1>
            <figure>
                <img src={character.image} alt={character.name} />
            </figure>
        </Layout>
    )
}
export async function getStaticPaths() {
    const data = await unfetch('https://rickandmortyapi.com/api/character')
    const characters = await data.json()
    console.log(characters)
    const paths = characters.results.map(character => {
            return {params: {id: `${character.id}`}}
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    // will be passed to the page component as props/data fetching
    const data = await unfetch('https://rickandmortyapi.com/api/character/' + params.id)
    const character = await data.json()
    //console.log(character)
    return {
        props: {
             character
        },
    }
}

export default CharacterDetail