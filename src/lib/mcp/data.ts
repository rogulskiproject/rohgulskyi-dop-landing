// Shared portfolio data for MCP tools.
// Kept in-module (no I/O) so this file is import-safe at module evaluation.

export type PortfolioProject = {
  title: string;
  client: string;
  category: string;
  filterGroup: "Fashion" | "Commercial" | "Documentary" | "Music Video";
  url: string;
  vimeoId?: string;
  youtubeId?: string;
};

export const SITE_URL = "https://bohdanrohulskyi.com";

export const PROJECTS: PortfolioProject[] = [
  { title: "Dylan Bachelet", client: "Imagine Magazine", category: "Editorial", filterGroup: "Fashion", url: "/work/dylan-bachelet", vimeoId: "1107691277" },
  { title: "Yaroslava Mohushih", client: "PUMA", category: "Documentary Film", filterGroup: "Commercial", url: "/work/yaroslava-mohushih", vimeoId: "1010047613" },
  { title: "Orserio", client: "Orserio", category: "E-Commerce Brand Film", filterGroup: "Commercial", url: "/work/orserio", vimeoId: "1172857771" },
  { title: "Valentin Day", client: "Zielinski & Rozen", category: "Documentary Campaign Film", filterGroup: "Commercial", url: "/work/valentin-day", vimeoId: "1166656782" },
  { title: "AnOther Magazine", client: "Simone Rocha", category: "Editorial", filterGroup: "Fashion", url: "/work/another-magazine", vimeoId: "1010017917" },
  { title: "Hozier — Francesca", client: "Hozier", category: "Music Video", filterGroup: "Music Video", url: "/work/hozier-francesca", youtubeId: "K1u_hL11auM" },
  { title: "PUMA FIT 23", client: "PUMA", category: "Commercial / Sport", filterGroup: "Commercial", url: "/work/puma-fit-23", vimeoId: "948342341" },
  { title: "Puma CR", client: "PUMA", category: "Commercial / Sport", filterGroup: "Commercial", url: "/work/puma-cr", vimeoId: "1010036272" },
  { title: "Chernaya — Rami Kallas", client: "Rami Kallas", category: "Music Video", filterGroup: "Music Video", url: "/work/chernaya-rami-kallas", vimeoId: "1010028819" },
  { title: "The Best of BoF 500 2023", client: "The Business of Fashion", category: "Fashion Recap", filterGroup: "Documentary", url: "/work/bof-500-2023", youtubeId: "zNdnPu8L9_Y" },
  { title: "Alessandro Michele — The BoF Podcast", client: "The Business of Fashion", category: "Interview / Fashion", filterGroup: "Documentary", url: "/work/alessandro-michele-bof", youtubeId: "qtJqYEtbrBA" },
  { title: "TVORCHI — Віч-на-Віч", client: "TVORCHI", category: "Music Video", filterGroup: "Music Video", url: "/work/tvorchi-vich-na-vich", youtubeId: "Y5QMUv7H0ic" },
  { title: "Kotex: Art's Missing Period", client: "Kotex", category: "Documentary Film", filterGroup: "Documentary", url: "/work/kotex-arts-missing-period", youtubeId: "EmCZ8EqEVKE" },
  { title: "Uncharted: Sail GP", client: "Sail GP", category: "Documentary Film", filterGroup: "Documentary", url: "/work/uncharted-sail-gp", youtubeId: "PDfaMsRMGY8" },
  { title: "Moove — Fire", client: "Moove", category: "Music Video", filterGroup: "Music Video", url: "/work/moove-fire", vimeoId: "1179879918" },
  { title: "Vogue Mexico — Michelle Salas / Dolce & Gabbana", client: "Vogue Mexico", category: "Documentary", filterGroup: "Documentary", url: "/work/vogue-mexico", youtubeId: "Nh1ZWDz44no" },
];

export const CATEGORIES = ["Fashion", "Commercial", "Documentary", "Music Video"] as const;

export const CONTACT = {
  name: "Bohdan Rohulskyi",
  role: "Director of Photography (Cinematographer)",
  location: "London, United Kingdom",
  availability: "Available across the UK and Europe",
  email: "rogulskiproject@gmail.com",
  website: SITE_URL,
};

export const BIO = `Bohdan Rohulskyi is a London-based Director of Photography working across sport, fashion, culture and branded storytelling. With a background in documentary and performance-led work, he creates cinematic imagery rooted in real human presence, textured realism and emotional precision. A strong visual partner for directors and a reliable, production-aware DoP for producers. Own kit, lean setups, London-based, available across the UK and Europe.`;
