import  Link  from "next/link";
import Image from "next/image";
import Head from "next/head";
export default function index({data}) {
  return (
    <div>
        <Head>
            <title>Este es mi primer post</title>
            <meta 
            name="description"
            content="mi primer post"
            />
        </Head>
        BLOg
        <Image
            src="/img/1.jpeg"
            width={600}
            height={600}
            alt="MI imagen"
        ></Image>
        <Link href="/about">
            <a>About</a>
        </Link>
        <div>
            {
                data.map(({id, title, body})=>(
                    <div key={id}>
                        <h3> 
                            <Link href={`/blog/${id}`}>
                                <a>{id} - {title}</a>
                            </Link>
                        </h3>
                        <p>
                            {body}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return {
            props:{
                data
            }
        }
    } catch (error) {
        console.log(error);
    }
}
