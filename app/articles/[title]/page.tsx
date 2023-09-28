export default function showArticlePage(props: any) {
    console.log(props);
    return (
        <div>
            <h1>Show Article Page</h1>
            <h1>{props.params.title}</h1>
        </div>
    )
}