// @ts-check
import { defineConfig } from 'astro/config';

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgSite = owner && repository === `${owner}.github.io`;

const site = process.env.SITE ?? (owner ? `https://${owner}.github.io` : undefined);
const defaultBase = repository && !isUserOrOrgSite ? `/${repository}/` : '/';
const rawBase = process.env.BASE ?? defaultBase;

const normalizeBase = (value) => {
  if (!value || value === '/') return '/';
  const trimmed = value.trim().replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}/` : '/';
};

const base = normalizeBase(rawBase);

export default defineConfig({
  output: 'static',
  ...(site ? { site } : {}),
  base
});
