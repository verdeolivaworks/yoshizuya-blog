import { SearchBar } from "@/components/SearchBar";
import { Separator } from "@/components/ui/separator";
import { getCategories, getTags } from "@/lib/api";
import Link from "next/link";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  let categories = { docs: [] as { id: string; name: string; slug: string }[] };
  let tags = { docs: [] as { id: string; name: string; slug: string }[] };

  try {
    [categories, tags] = await Promise.all([getCategories(), getTags()]);
  } catch {
    // API not ready yet
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
      <div>{children}</div>
      <aside className="space-y-6">
        <div>
          <h3 className="font-bold mb-2">検索</h3>
          <SearchBar />
        </div>
        <Separator />
        <div>
          <h3 className="font-bold mb-2">カテゴリー</h3>
          <ul className="space-y-1">
            {categories.docs.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/blog/category/${cat.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div>
          <h3 className="font-bold mb-2">タグ</h3>
          <div className="flex flex-wrap gap-1.5">
            {tags.docs.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog/tag/${tag.slug}`}
                className="text-xs bg-yoshizuya-light text-foreground px-2 py-1 rounded hover:bg-yoshizuya-mid transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
