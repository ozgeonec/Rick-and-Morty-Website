import Layout from '../components/layout'
import unfetch from 'isomorphic-fetch'
import Head from 'next/head'
import Link from "next/link";


function HomePage({characters}) {
    return (
        <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            <h1 className="title">THE RICK AND MORTY</h1>
            <ul>
                {characters.results.map(character =>(<li key={character.id}>
                    <Link href={}>
                       <a>{character.name}</a>
                    </Link>

                </li>))}
            </ul>
        </Layout>
    )
}
export async function getStaticProps() {
    // will be passed to the page component as props/data fetching
    const data = await unfetch("https://rickandmortyapi.com/api/character")
    const characters = await data.json()
    //console.log(characters)
    return {
        props: {
            characters
        },
    }
}

export default HomePage