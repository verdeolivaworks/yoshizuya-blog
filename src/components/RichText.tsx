import { renderLexical } from "@/lib/lexical";

interface RichTextProps {
  data: any;
}

export function RichText({ data }: RichTextProps) {
  try {
    const html = renderLexical(data);
    if (!html) return null;
    return (
      <div
        className="text-sm leading-relaxed [&_a]:text-primary [&_a]:underline [&_p]:mb-3"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return null;
  }
}
