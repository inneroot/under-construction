// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Одинцовское благочиние Одинцовской епархии Русской Православной Церкви',
  tagline: 'Технические работы',
  url: 'https://odinblag.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
        title: 'Одинцовское благочиние',
        logo: {
          alt: 'Одинцовское благочиние Одинцовской епархии Русской Православной Церкви Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Расписание богослужений',
          },
          {to: '/blog', label: 'Материалы', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ссылки',
            items: [
              {
                label: 'Московская Патриархия',
                href: 'http://www.patriarchia.ru/',
              },
              {
                label: 'Одинцовская епархия',
                href: 'https://www.odinceparh.ru/',
              },
              {
                label: 'Одинцовская епархия вконтакте',
                href: 'https://vk.com/odinceparh',
              },
              {
                label: 'Одинцовское благочиние вконтакте',
                href: 'https://vk.com/odinblag'
              }

            ],
          },
          {
            title: 'Полезные ссылки',
            items: [
              {
                label: 'Незнакомое православие',
                href: 'http://missionary.su/',
              },
              {
                label: 'Православие.ру',
                href: 'http://www.pravoslavie.ru/',
              },
              {
                label: 'Миссионерская группа «Вы соль земли»',
                href: 'https://www.vk.com/solzeml',
              },
              {
                label: 'Акция «Библия за год»',
                href: 'https://vk.com/bibliyazagod'
              }
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
