import avatar from '~/images/avatar.jpg';

const NAME = 'Rostyslav Ugryniuk';
const JOB_TITLE = 'Front-end Developer';
const CURRENT_YEAR = new Date().getFullYear();

const NAV_ITEMS = [
  { href: '/', name: 'About', partiallyActive: false },
  { href: '/blog/', name: 'Articles', partiallyActive: true },
  { href: '/projects/', name: 'Projects', partiallyActive: false },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/UgRoss' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/' },
];

export const siteConfig = {
  name: NAME,
  jobTitle: JOB_TITLE,
  shortBio: `${JOB_TITLE} and CS student. Living and coding in Ukraine.`,
  email: 'contact@ugross.dev',
  avatar,
  // SEO
  siteUrl: 'https://ugross.space',
  twitter: '@ug_ross',
  siteLanguage: 'en',
  defaultDescription: `${JOB_TITLE} and CS student. Living and coding in Ukraine.`,
  defaultTitle: `${NAME} | ${JOB_TITLE}`,
  // Navigation items
  navItems: NAV_ITEMS,
  // Footer text
  footerText: `© Copyright ${CURRENT_YEAR} ${NAME}`,
  socialLinks: SOCIAL_LINKS,
};
