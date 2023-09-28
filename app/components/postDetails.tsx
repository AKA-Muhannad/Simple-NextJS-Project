export default async function postDetails({ postId }: any) {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    }); // wait for 2 second
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: {
            revalidate: 120,
        }
    });
    const posts = await response.json();
    console.log(`--- ${postId} ---`);
    return (
        <div>
            <div>
                <div style={{
                    width: "100%",
                    background: "ghostwhite",
                    padding: "20px",
                    borderRadius: "10px",
                    color: "black",
                    marginTop: "20px"
                }}>
                    <h2>
                        {posts.id}
                    </h2>
                    <h1>
                        {posts.title}
                    </h1>
                    <hr/>
                    <p>
                        {posts.body}
                    </p>
                </div>
            </div>
        </div>
    )
}