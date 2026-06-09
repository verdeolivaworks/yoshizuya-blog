import React from "react";
import type { Metadata } from "next";
import { RootLayout } from "@payloadcms/next/layouts";
import config from "@payload-config";
import "@payloadcms/next/css";
import "../globals.css";

export const metadata: Metadata = {
  title: "ヨシヅヤCMS",
  description: "ヨシヅヤブログ管理画面",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout config={config}>{children}</RootLayout>
  );
}
