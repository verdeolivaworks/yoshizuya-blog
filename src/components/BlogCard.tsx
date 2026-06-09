import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: { url: string; alt?: string } | null;
  publishedAt?: string | null;
  categories?: { id: string; name: string; slug: string }[];
}

export function BlogCard({ title, slug, excerpt, coverImage, publishedAt, categories }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
        {coverImage && (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={coverImage.url}
              alt={coverImage.alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader className={coverImage ? "pb-2" : ""}>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {categories?.map((cat) => (
              <Badge key={cat.id} variant="secondary" className="text-xs">
                {cat.name}
              </Badge>
            ))}
          </div>
          <h3 className="text-lg font-bold leading-tight">{title}</h3>
        </CardHeader>
        <CardContent>
          {excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
          )}
          {publishedAt && (
            <p className="text-xs text-muted-foreground mt-2">
              {new Date(publishedAt).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
