import { RootPage } from "@payloadcms/next/views";
import config from "@payload-config";
import { importMap } from "../importMap";

type PageProps = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

const Page = ({ params, searchParams }: PageProps) =>
  RootPage({ config, params, searchParams, importMap });

export default Page;
