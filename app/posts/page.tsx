import Todo from "../components/todo";
import Link from "next/link";
interface Todo {
    id: number;
    title: string;
    body: string;
}

export default async function PostsPage() {
    // API request from the compoment using server side rendering
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // {cache: "no-store"}
        // we will do it as ISG (Incremental Static Generation) so we don't need to use cache
        // so it will bring the data from the cache
        // now we combined both SSR and SSG by using ISG
        next: {
            revalidate: 120 // revalidate the page every 120 seconds
        }
    });
    const posts: Todo[] = await response.json();
    const postsTSX = posts.map((post: Todo) => {
        return (
            <Link href={`/posts/${post.id}`} style={{ width: "70%" }}>
                <div style={{
                    width: "100%",
                    background: "ghostwhite",
                    padding: "20px",
                    borderRadius: "10px",
                    color: "black",
                    marginTop: "20px"
                }}>
                    <h3>{post.id}</h3>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </Link>
        );
    });

    console.log(posts);
    return (
        <div>
            <h1>Posts Page</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                {/* rendering */}
                {postsTSX}
            </div>
        </div>
    );
}

