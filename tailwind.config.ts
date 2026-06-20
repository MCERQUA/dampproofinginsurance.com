import type { Config } from "tailwindcss";

/* ============================================================
   DAMPPROOFING INSURANCE — "Blue & Stone Gray" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to steel blue (primary) / slate stone gray
   (secondary) / water blue (accent).
   clay = steel blue · sage = slate stone gray · gold = water blue
   cream = cool paper · sand = soft gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F8FA",
        sand: "#EDF1F5",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1E6FA8",
          dark: "#155A8C",
          light: "#2E87C0",
          50: "#EBF3FA",
          100: "#CCE3F3",
          200: "#99C8E7",
          300: "#66ADDB",
          400: "#3A92CF",
          500: "#2E87C0",
          600: "#1E6FA8",
          700: "#155A8C",
          800: "#0F4470",
          900: "#0A2F54",
        },
        sage: {
          DEFAULT: "#5C6B7A",
          dark: "#47566A",
          light: "#7A8A99",
          50: "#F0F2F4",
          100: "#D9DEE4",
          200: "#B3BDC8",
          300: "#8D9CAC",
          400: "#677B90",
          500: "#5C6B7A",
          600: "#47566A",
          700: "#35415A",
        },
        gold: {
          DEFAULT: "#3A8FBF",
          dark: "#2A7AAA",
          light: "#56AADB",
          50: "#EAF4FB",
          100: "#CCE7F5",
          200: "#99CFEC",
          300: "#66B7E2",
          400: "#3A8FBF",
          500: "#2A7AAA",
          600: "#1F6595",
        },
        espresso: "#1A2530",
        cocoa: "#2E3D4C",
        mocha: "#546070",
        adobe: "#D0D9E2",
        adobeDark: "#B8C5D0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F6F8FA 0%, #EDF1F5 40%, #E5EDF5 70%, #F6F8FA 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(30,111,168,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(92,107,122,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1E6FA8 0%, #2E87C0 100%)",
        "sage-gradient": "linear-gradient(135deg, #5C6B7A 0%, #7A8A99 100%)",
        "gold-gradient": "linear-gradient(135deg, #3A8FBF 0%, #56AADB 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(21, 90, 140, 0.22), 0 4px 12px -6px rgba(26, 37, 48, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(21, 90, 140, 0.28), 0 10px 30px -10px rgba(26, 37, 48, 0.10)",
        card: "0 2px 8px -2px rgba(26, 37, 48, 0.06), 0 1px 3px -1px rgba(26, 37, 48, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(21, 90, 140, 0.24), 0 8px 20px -8px rgba(26, 37, 48, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(21, 90, 140, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
