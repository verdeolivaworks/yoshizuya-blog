const BASE_URL = "https://www.atkimono.jp";

const links = {
  yoshizuya2607_lp: {
    url: `${BASE_URL}/lp/yoshizuya2607/`,
    utm: { source: "blog", medium: "referral", campaign: "2607_dairental" },
  },
};

type LinkValue = (typeof links)[keyof typeof links];

export const LINKS: Record<string, LinkValue> = links;

export function buildUrl(link: LinkValue): string {
  const u = new URL(link.url);
  u.searchParams.set("utm_source", link.utm.source);
  u.searchParams.set("utm_medium", link.utm.medium);
  u.searchParams.set("utm_campaign", link.utm.campaign);
  return u.toString();
}

export type LinkKey = keyof typeof links;
