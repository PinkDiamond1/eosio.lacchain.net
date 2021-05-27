/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "EOSIO Pro Testnet Blockchain - LACChain BID Labs", // Title for your website.
  tagline: "Documentación Técnica LACChain EOSIO",
  url: "https://eosio.lacchain.net", // Your website URL
  baseUrl: "/", // Base URL for your project */

  // Used for publishing and more
  projectName: "eosio.lacchain.net",
  organizationName: "LatamLink",
  favicon: "img/favicon.ico",

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: './docs',
          editUrl: 'https://github.com/LatamLink/eosio.lacchain.net/tree/master',
          // Equivalent to `docsUrl`.
          routeBasePath: 'docs/',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      title: ' ',
      hideOnScroll: false,
      logo: {
        alt: 'LACChain EOSIO Logo',
        src: 'img/logos/lacchain-eosio-logo.png',
        srcDark: 'https://raw.githubusercontent.com/LatamLink/es.latamlink.io/master/static/img/footerlogo.png'
      },
      items: [
        // {
        //   href: 'https://medium.com/@latam_link',
        //   label: ' Noticias',
        //   position: 'right',
        // },
        {
          href: 'https://lacchain.eosio.online/',
          label: 'Monitor de Red',
          position: 'right',
        },
        {
          href: 'http://explorer.latamlink.io/',
          label: 'Explorador de Bloques',
          position: 'right',
        },
        {
          to: 'docs/eosio',
          label: 'Documentación',
          position: 'right',
        },
        {
          to: '/contactUs',
          label: 'Contáctenos',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {to: 'search'},
      ]
    },
    //Algolia integration
    algolia: {
      apiKey: '63254e86059566be7b401497c9484166',
      indexName: 'latamlink_es',
      placeholder: 'Buscar',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    //Google Analytics
    googleAnalytics: {
      trackingID: "UA-173987-71",
    },
  },
  scripts: [
    {
      src:
        'https://buttons.github.io/buttons.js',
      async: true,
    },
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
    'https://kit.fontawesome.com/6c84ac616f.js',
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js',
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  }
};

module.exports = siteConfig;
