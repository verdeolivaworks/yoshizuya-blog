import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ImageCarousel";
import { getPost } from "@/lib/api";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  let post: any;

  try {
    post = await getPost(slug);
  } catch {
    // API not ready yet
  }

  if (!post) {
    notFound();
  }

  const carouselImages = [
    ...(post.coverImage ? [{ src: post.coverImage.url, alt: post.coverImage.alt || post.title }] : []),
    ...(post.gallery?.map((g: any) => ({
      src: g.image?.url,
      alt: g.alt || post.title,
    })).filter((g: any) => g.src) || []),
  ];

  return (
    <article className="max-w-2xl">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.categories?.map((cat: any) => (
          <Link key={cat.id} href={`/blog/category/${cat.slug}`}>
            <Badge variant="secondary">{cat.name}</Badge>
          </Link>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      {post.publishedAt && (
        <p className="text-sm text-muted-foreground mb-6">
          {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
      {carouselImages.length > 0 && <ImageCarousel images={carouselImages} />}
      <Separator className="mb-6" />
      {post.content && (
        <div className="prose prose-sm max-w-none leading-relaxed whitespace-pre-wrap">
          {typeof post.content === "string"
            ? post.content
            : JSON.stringify(post.content)}
        </div>
      )}
      {post.tags?.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-1.5">
          {post.tags.map((tag: any) => (
            <Link key={tag.id} href={`/blog/tag/${tag.slug}`}>
              <Badge variant="outline" className="text-xs">
                #{tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
