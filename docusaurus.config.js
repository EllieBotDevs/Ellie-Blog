// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ellie Blog',
  tagline: 'Here you can find blog posts about Ellie and other things we are up to',
  url: 'https://blog.elliebot.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EllieBotDevs', // Usually your GitHub org/user name.
  projectName: 'Ellie-Blog', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            frontMatter.hide_reading_time ? undefined : defaultReadingTime({content}),
          // Please change this to your repo.
          editUrl:
            'https://github.com/EllieBotDevs/Ellie-Blog/tree/dev/blog',
          blogTitle: 'Ellie Blog',
          blogDescription: 'Here you can find blog posts about Ellie and other things we are up to',
          postsPerPage: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} EllieBotDevs.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ellie Blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            href: 'https://github.com/EllieBotDevs/Ellie-Blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation Site',
                to: 'https://docs.elliebot.net',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/SVQVzJq',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Computergeex5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EllieBotDevs/Ellie-Blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EllieBotDevs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
