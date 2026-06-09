import { BlogCard } from "@/components/BlogCard";
import { getPosts } from "@/lib/api";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params;
  let postsData = { docs: [] as any[] };

  try {
    postsData = await getPosts({ tag: slug, limit: 50 });
  } catch {
    // API not ready yet
  }

  return (
    <div>
      <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
        &larr; ブログ一覧に戻る
      </Link>
      <h1 className="text-2xl font-bold mb-6">
        タグ: <span className="text-primary">#{slug}</span>
      </h1>
      {postsData.docs.length === 0 ? (
        <p className="text-muted-foreground">このタグの記事はまだありません。</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {postsData.docs.map((post: any) => (
            <BlogCard key={post.id} title={post.title} slug={post.slug} excerpt={post.excerpt} coverImage={post.coverImage ? { url: post.coverImage.url, alt: post.coverImage.alt } : null} publishedAt={post.publishedAt} categories={post.categories} />
          ))}
        </div>
      )}
    </div>
  );
}
