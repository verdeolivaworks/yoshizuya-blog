import { BlogCard } from "@/components/BlogCard";
import { getPosts } from "@/lib/api";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const query = sp.q || "";
  let postsData = { docs: [] as any[] };

  if (query) {
    try {
      postsData = await getPosts({ search: query, limit: 50 });
    } catch {
      // API not ready yet
    }
  }

  return (
    <div>
      <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
        &larr; ブログ一覧に戻る
      </Link>
      <h1 className="text-2xl font-bold mb-6">
        検索結果: <span className="text-primary">&ldquo;{query}&rdquo;</span>
      </h1>
      {!query ? (
        <p className="text-muted-foreground">検索ワードを入力してください。</p>
      ) : postsData.docs.length === 0 ? (
        <p className="text-muted-foreground">該当する記事は見つかりませんでした。</p>
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
