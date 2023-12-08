import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.toastiet0ast.com/", // replace this with your deployed domain
  author: "Toastie",
  desc: "The ramblins of a random software developer.",
  title: "Toastie's blog",
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
    href: "mailto:toastie@toastiet0ast.com",
    linkTitle: `Send an email to me`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/toastie_t0ast",
    linkTitle: `My channel on Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@toastie_t0ast",
    linkTitle: `My YouTube channel`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/aAsGMFPfdu",
    linkTitle: `My Discord server`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://valkyriecoms.com/@toastie",
    linkTitle: `My profile on Valkyriecoms`,
    active: true,
  },
];
