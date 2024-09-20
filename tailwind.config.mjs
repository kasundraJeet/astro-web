/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        default: "var(--default)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        inverse: "var(--inverse)",
        border: "var(--border)",
      },
      fontSize: {
        "text-l": "var(--text-l)",
        "text-m": "var(--text-m)",
        "text-s": "var(--text-s)",
        "text-x": "var(--text-x)",
        "heading-xl": "var(--heading-xl)",
        "heading-l": "var(--heading-l)",
        "heading-m": "var(--heading-m)",
        "heading-s": "var(--heading-s)",
        "heading-1": "var(--heading-1)",
        "heading-2": "var(--heading-2)",
        "heading-3": "var(--heading-3)",
        "heading-4": "var(--heading-4)",
        "heading-5": "var(--heading-5)",
        "heading-6": "var(--heading-6)",
      },
    },
  },
  plugins: [],
};
