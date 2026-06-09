import Link from "next/link";
import { buildUrl, LINKS, type LinkKey } from "@/lib/links";

interface CTAButtonProps {
  linkKey: LinkKey;
  label: string;
  className?: string;
}

export function CTAButton({ linkKey, label, className = "" }: CTAButtonProps) {
  const link = LINKS[linkKey];
  if (!link) return null;

  const href = buildUrl(link);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-center ${className}`}
    >
      {label}
    </a>
  );
}
