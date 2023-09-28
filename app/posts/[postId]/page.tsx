
import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function postDetailsPage({ params }: any) {
    const postId = params.postId;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    console.log(`--- ${params.postId} ---`);
    const loadingTSX = (
        <div>
            <h1>Loading... ⛓️</h1>
        </div>
    );
    return (
        <div style={{ padding: "20px" }}>
            <div>
                <h1>Post Details Page</h1>
                <Suspense fallback={loadingTSX}>
                    <PostDetails postId={postId} post={post} />
                </Suspense>
            </div>
        </div>
    )
}