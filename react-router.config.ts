import type { Config } from '@react-router/dev/config';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // ssr: false,

  // Return a list of URLs to prerender at build time
  async prerender() {
    return ['/', '/projects', 'resume', 'contact'];
  },
} satisfies Config;
