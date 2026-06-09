const BASE_URL = "https://www.atkimono.jp";

export const LINKS = {
  yoshizuya2607: {
    lp: {
      url: `${BASE_URL}/lp/yoshizuya2607/`,
      utm: {
        source: "blog",
        medium: "referral",
        campaign: "2607_dairental",
      },
    },
  },
} as const;

export function buildUrl(
  link: { url: string; utm: { source: string; medium: string; campaign: string } }
): string {
  const u = new URL(link.url);
  u.searchParams.set("utm_source", link.utm.source);
  u.searchParams.set("utm_medium", link.utm.medium);
  u.searchParams.set("utm_campaign", link.utm.campaign);
  return u.toString();
}

export type LinkKey = keyof typeof LINKS;
