import { RootPage } from "@payloadcms/next/views";
import config from "@payload-config";

interface PageProps {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
}

export default function Page(props: PageProps) {
  return RootPage({ config, ...props });
}
