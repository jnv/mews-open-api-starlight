import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightOpenAPI, { createOpenAPISidebarGroup } from 'starlight-openapi';

const connectorAPIReferenceGroup = createOpenAPISidebarGroup();

// https://astro.build/config
export default defineConfig({
  site: 'https://jnv.github.io',
  base: '/mews-open-api-starlight/',
  integrations: [
    markdoc(),
    starlight({
      title: 'Mews Open API',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      plugins: [
        starlightSidebarTopics(
          [
            {
              label: 'Mews Open API',
              link: '/',
              id: 'open-api',
              icon: 'open-book',
              items: [
                {
                  label: 'Overview',
                  link: '/',
                },
                {
                  label: 'Getting started',
                  link: '/open-api/getting-started/',
                },
                {
                  label: 'Mews Marketplace',
                  link: '/open-api/mews-marketplace/',
                },
                {
                  label: 'Your journey with Mews',
                  collapsed: true,
                  autogenerate: {
                    directory: 'open-api/your-journey',
                  },
                },
                {
                  label: 'Staying up to date',
                  collapsed: true,
                  autogenerate: {
                    directory: 'open-api/staying-up-to-date',
                  },
                },
                {
                  label: 'The Mews APIs',
                  link: '/open-api/the-mews-apis/',
                },
                {
                  label: 'Use Cases',
                  collapsed: true,
                  autogenerate: {
                    directory: 'open-api/use-cases',
                  },
                },
              ],
            },
            {
              label: 'Connector API',
              link: '/connector-api/',
              id: 'connector-api',
              icon: 'puzzle',
              items: [
                {
                  label: 'Overview',
                  link: '/connector-api/',
                },
                {
                  label: 'Getting started',
                  link: '/connector-api/getting-started/',
                },
                {
                  label: 'Usage guidelines',
                  collapsed: true,
                  autogenerate: {
                    directory: 'connector-api/guidelines',
                  },
                },
                {
                  label: 'Concepts',
                  collapsed: true,
                  autogenerate: {
                    directory: 'connector-api/concepts',
                  },
                },
                {
                  label: 'Use cases',
                  collapsed: true,
                  autogenerate: {
                    directory: 'connector-api/use-cases',
                  },
                },
                connectorAPIReferenceGroup,
                {
                  label: 'API Events',
                  collapsed: true,
                  autogenerate: {
                    directory: 'connector-api/events',
                  },
                },
                {
                  label: 'Your integration journey',
                  collapsed: true,
                  autogenerate: {
                    directory: 'connector-api/your-journey',
                  },
                },
                {
                  label: 'Deprecations',
                  collapsed: true,
                  autogenerate: {
                    directory: 'connector-api/deprecations',
                  },
                },
                {
                  label: 'Changelog',
                  collapsed: true,
                  autogenerate: {
                    directory: 'connector-api/changelog',
                  },
                },
                {
                  label: 'Release Notes',
                  link: '/release-notes',
                },
              ],
            },
          ],
          {
            topics: {
              'connector-api': [
                '/connector-api',
                '/connector-api/**/*',
                '/connector-api/reference/**/*',
              ],
              'open-api': ['/'],
            },
          }
        ),
        starlightOpenAPI([
          {
            base: 'connector-api/reference',
            schema: 'public/schemas/connector-api.openapi.yaml',
            sidebar: {
              label: 'Reference',
              group: connectorAPIReferenceGroup,
            },
          },
        ]),
      ],
    }),
  ],
});
