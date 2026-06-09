import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

interface RichTextProps {
  data: any;
}

export function RichText({ data }: RichTextProps) {
  if (!data) return null;

  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {
      return <div className="whitespace-pre-wrap text-sm leading-relaxed">{data}</div>;
    }
  }

  try {
    const html = convertLexicalToHTML({ data });
    return (
      <div
        className="prose prose-sm max-w-none leading-relaxed [&_a]:text-primary [&_a]:underline [&_p]:mb-3"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return <div className="whitespace-pre-wrap text-sm leading-relaxed">{JSON.stringify(data)}</div>;
  }
}
