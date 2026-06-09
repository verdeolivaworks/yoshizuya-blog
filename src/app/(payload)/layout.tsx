import React from "react";
import type { Metadata } from "next";
import { RootLayout } from "@payloadcms/next/layouts";
import config from "@payload-config";
import { handleServerFunctions } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import "@payloadcms/next/css";
import "../globals.css";
import { importMap } from "./admin/importMap";

export const metadata: Metadata = {
  title: "ヨシヅヤCMS",
  description: "ヨシヅヤブログ管理画面",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={handleServerFunctions as unknown as ServerFunctionClient}>
      {children}
    </RootLayout>
  );
}
