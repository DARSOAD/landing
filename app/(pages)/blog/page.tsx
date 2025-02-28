import blogData from "@/app/data/dataServices.json";
import BlogList from "@/app/components/BlogList";

export default function BlogPage() {
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <BlogList articles={blogData} />
        </main>
    );
}
