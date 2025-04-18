// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vinh Duc Nguyen",
  tagline:
    "Devops Engineer | MB Bank",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://vinhnd20.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/vinhnd4/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vinhnd20", // Usually your GitHub org/user name.
  projectName: "vinhnd4", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-KGVK27VGQ7",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/vinhnd20/vinhnd4/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/vinhnd20/vinhnd4/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "About Me",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/vinhnd20",
            position: "right",
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
          {
            className: "navbar__youtube navbar__icon",
            "aria-label": "YouTube channel",
            position: "right",
            href: "https://www.youtube.com",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About Me",
            items: [
              {
                label: "My Work",
                to: "docs/about_me/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/vinh-nguyen-4a168b246",
              },
              // {
              //   label: "YouTube",
              //   href: "https://www.youtube.com/c/FedericoTartarini",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/FedericoTartar1",
              // },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/vinhnd20",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vinh Duc Nguyen. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["latex"],
      },
    }),
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};

export default config;
