// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Building Hub',
  tagline: 'For Network Publics',
  url: 'https://wiki.kabocha.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kabocha-network', // Usually your GitHub org/user name.
  projectName: 'kabocha-network.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
stylesheets: [
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700',
    'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,400;1,300&family=Space+Grotesk:wght@400;600;700&display=swap'
  ],
  themeConfig:
  
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Kabocha logo',
          src: '/img/kabocha-clear.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro/welcome',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          
          { href: 'https://kabocha.network/', label: 'Home', position: 'right'},
          { href: 'https://gov.edgewa.re/', label: 'Gov', position: 'right'},
          { href: 'https://apps.decentration.org/', label: 'Blockchain', position: 'right'},
          { href: 'https://wiki.kabocha.network/recipes', label: 'Recipes', position: 'right'},
          { href: 'https://github.com/kabocha-network', label: 'Repos', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/intro/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Exchange',
                href: 'https://substrate.stackexchange.com/questions/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/MC2jKfG2s4',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kabochanetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kabocha-network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kabocha True Trust Company`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};



module.exports = config;
