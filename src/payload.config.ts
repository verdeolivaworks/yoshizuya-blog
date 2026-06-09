import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Users } from "./collections/Users.ts";
import { Posts } from "./collections/Posts.ts";
import { Categories } from "./collections/Categories.ts";
import { Tags } from "./collections/Tags.ts";
import { Media } from "./collections/Media.ts";
import { Inquiries } from "./collections/Inquiries.ts";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  admin: {
    user: "users",
  },
  collections: [Users, Posts, Categories, Tags, Media, Inquiries],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  editor: lexicalEditor({}),
});
