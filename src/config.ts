import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.elliebot.net/", // replace this with your deployed domain
  author: "toastie_t0ast, mai_lanfiel, EllieBot_Team",
  desc: "The tales of the Ellie dev team.",
  title: "Elliebot blog",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:contact@elliebot.net",
    linkTitle: `Send an email to me`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/etQdZxSyEH",
    linkTitle: `My Discord server`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://valkyriecoms.com/@EllieBotDevs",
    linkTitle: `My profile on Valkyriecoms`,
    active: true,
  },
];
