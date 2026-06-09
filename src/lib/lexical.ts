interface LexicalNode {
  children?: LexicalNode[];
  text?: string;
  type?: string;
  format?: number;
  tag?: string;
  url?: string;
}

function renderNode(node: LexicalNode): string {
  if (node.type === "text" || node.text !== undefined) {
    let t = node.text || "";
    const f = node.format ?? 0;
    if (f & 1) t = `<strong>${t}</strong>`;
    if (f & 2) t = `<em>${t}</em>`;
    if (f & 8) t = `<u>${t}</u>`;
    if (f & 16) t = `<s>${t}</s>`;
    if (f & 4) t = `<code>${t}</code>`;
    return t;
  }

  const children = node.children?.map(renderNode).join("") || "";

  if (node.type === "heading") {
    const tag = node.tag || "h2";
    return `<${tag} class="font-bold mt-6 mb-2">${children}</${tag}>`;
  }
  if (node.type === "quote" || node.type === "blockquote") {
    return `<blockquote class="border-l-4 border-yoshizuya-mid pl-4 italic my-4">${children}</blockquote>`;
  }
  if (node.type === "list") {
    const tag = node.tag === "ol" ? "ol" : "ul";
    return `<${tag} class="list-disc pl-5 space-y-1 my-3">${children}</${tag}>`;
  }
  if (node.type === "listitem") {
    return `<li>${children}</li>`;
  }
  if (node.type === "link") {
    return `<a href="${node.url || "#"}" class="text-primary underline" target="_blank" rel="noopener noreferrer">${children}</a>`;
  }
  if (node.type === "horizontalrule") {
    return `<hr class="my-6 border-yoshizuya-mid" />`;
  }
  if (node.type === "linebreak") {
    return "<br />";
  }

  return children ? `<p class="mb-3">${children}</p>` : children;
}

export function renderLexical(data: any): string {
  if (!data) return "";

  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {
      return data;
    }
  }

  const root = data.root || data;
  const children = Array.isArray(root) ? root : root.children || [];

  if (!Array.isArray(children)) return "";

  return children.map(renderNode).join("\n");
}
