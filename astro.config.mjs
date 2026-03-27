// @ts-check
import { defineConfig } from 'astro/config';

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgSite = owner && repository === `${owner}.github.io`;

const site = process.env.SITE ?? (owner ? `https://${owner}.github.io` : undefined);
const base = process.env.BASE ?? (repository && !isUserOrOrgSite ? `/${repository}/` : '/');

export default defineConfig({
  output: 'static',
  ...(site ? { site } : {}),
  base
});
