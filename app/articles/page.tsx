import Link from 'next/link';

export default function articlesPage() {
    return (
        <div>
            <h4>Articles Page</h4>
            <Link href={'/posts'}>
            <button>
                Take me to the posts page
            </button>
            </Link>
        </div>
    )
}