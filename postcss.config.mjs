/** Enables Tailwind v4 when using `next build --webpack` (e.g. GitHub Actions). */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
