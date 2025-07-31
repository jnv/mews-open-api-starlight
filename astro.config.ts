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
              link: '/open-api/',
              id: 'open-api',
            },
            {
              label: 'Connector API',
              link: '/connector-api/',
              id: 'connector-api',
              icon: 'open-book',
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
