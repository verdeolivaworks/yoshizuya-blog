import { BlogCard } from "@/components/BlogCard";
import { getPosts } from "@/lib/api";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogListPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const page = Number(sp.page) || 1;
  const limit = 12;

  let postsData = { docs: [] as any[], totalPages: 1, page: 1 };

  try {
    postsData = await getPosts({ limit, page });
  } catch {
    // API not ready yet
  }

  const { docs: posts, totalPages, page: currentPage } = postsData;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ブログ</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">記事がまだありません。</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post: any) => (
              <BlogCard
                key={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                coverImage={post.coverImage ? { url: post.coverImage.url, alt: post.coverImage.alt } : null}
                publishedAt={post.publishedAt}
                categories={post.categories}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href={`/blog?page=${currentPage - 1}`} />
                  </PaginationItem>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink href={`/blog?page=${p}`} isActive={p === currentPage}>
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext href={`/blog?page=${currentPage + 1}`} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
}
