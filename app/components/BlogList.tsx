import Link from "next/link";

export default function BlogList({ articles }: { articles: any[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
                <div key={article.id} className="border p-4 rounded-lg shadow-md">
                    <img src={article.image} alt={article.header} className="w-full h-auto rounded-md" />
                    <h2 className="text-xl font-semibold mt-2">{article.header}</h2>
                    <p className="text-gray-500">{article.date}</p>
                    <p className="mt-2">{article.description.substring(0, 100)}...</p>
                    <Link href={`/blog/${article.slug}`} className="text-blue-500">
                        Leer más
                    </Link>
                </div>
            ))}
        </div>
    );
}
