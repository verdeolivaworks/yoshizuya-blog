const API_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

async function fetchAPI(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}/api/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getPosts(params?: {
  limit?: number;
  page?: number;
  category?: string;
  tag?: string;
  search?: string;
}) {
  const searchParams = new URLSearchParams();
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.category) searchParams.set("where[categories][equals]", params.category);
  if (params?.tag) searchParams.set("where[tags][equals]", params.tag);
  if (params?.search) searchParams.set("where[title][like]", params.search);
  searchParams.set("where[status][equals]", "published");
  searchParams.set("depth", "2");
  searchParams.set("sort", "-publishedAt");
  return fetchAPI(`posts?${searchParams.toString()}`);
}

async function populateMedia(post: any): Promise<any> {
  if (!post) return post;

  if (typeof post.coverImage === "number") {
    try {
      const media = await fetchAPI(`media/${post.coverImage}`);
      post.coverImage = media;
    } catch {
      post.coverImage = null;
    }
  }

  if (post.gallery?.length) {
    for (const item of post.gallery) {
      if (typeof item.image === "number") {
        try {
          const media = await fetchAPI(`media/${item.image}`);
          item.image = media;
        } catch {
          item.image = null;
        }
      }
    }
  }

  return post;
}

export async function getPost(slug: string) {
  const data = await fetchAPI(`posts?where[slug][equals]=${slug}&depth=0`);
  return populateMedia(data.docs?.[0] || null);
}

export async function getCategories() {
  return fetchAPI("categories?limit=100&sort=name");
}

export async function getTags() {
  return fetchAPI("tags?limit=100&sort=name");
}

export async function getBanners(position: "sidebar" | "top") {
  const data = await fetchAPI(
    `banners?where[position][equals]=${position}&where[active][equals]=true&depth=2&sort=order`
  );
  return data.docs || [];
}

export async function submitInquiry(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return fetchAPI("inquiries", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
