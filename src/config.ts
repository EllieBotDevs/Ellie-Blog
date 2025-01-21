import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.elliebot.net/", // replace this with your deployed domain
  author: "EllieBot Team",
  profile: "https://blog.elliebot.net",
  desc: "The tales of the Ellie dev team.",
  title: "Elliebot blog",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://toastielab.dev/EllieBotDevs/Ellie-Blog/_edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
};

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 210,
  height: 40,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:contact@elliebot.net",
    linkTitle: `Send an email to us`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/etQdZxSyEH",
    linkTitle: `Our Discord server`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://valkyriecoms.com/@EllieBotDevs",
    linkTitle: `Our profile on Valkyriecoms`,
    active: true,
  },
];
