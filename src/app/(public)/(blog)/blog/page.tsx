import { BlogCard } from "@/components/BlogCard";
import { BannerSlot } from "@/components/BannerSlot";
import { getPosts, getBanners } from "@/lib/api";
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
  let topBanners: any[] = [];

  try {
    [postsData, topBanners] = await Promise.all([
      getPosts({ limit, page }),
      getBanners("top"),
    ]);
  } catch {
    // API not ready yet
  }

  const { docs: posts, totalPages, page: currentPage } = postsData;

  return (
    <div>
      {topBanners.length > 0 && (
        <div className="mb-6">
          <BannerSlot banners={topBanners} variant="top" title="催事のご案内" />
        </div>
      )}
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="https://yoshizuya.furisode-collection.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 border border-yoshizuya-mid text-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-yoshizuya-light transition-colors"
        >
          振袖コレクションを見る
          <span className="text-yoshizuya-red text-xs font-bold">→</span>
        </a>
        <a
          href="https://yoshizuya.furisode-collection.com/%E3%83%AC%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 border border-yoshizuya-mid text-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-yoshizuya-light transition-colors"
        >
          レンタルコレクションを見る
          <span className="text-yoshizuya-red text-xs font-bold">→</span>
        </a>
      </div>
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
