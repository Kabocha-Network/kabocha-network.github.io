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
          { href: 'https://edgewa.re/', label: 'Edgeware', position: 'right'},
          { href: 'https://gov.edgewa.re/', label: 'Gov', position: 'right'},
          { href: 'https://apps.decentration.org/', label: 'Apps', position: 'right'},
          { href: 'https://wiki.kabocha.network/recipes', label: 'Recipes', position: 'right'},
          { href: 'https://github.com/decentration', label: 'Repos', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: 'docs/intro/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/decentrated',
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
                href: 'https://github.com/decentration',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kabocha True Trust`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};



module.exports = config;
