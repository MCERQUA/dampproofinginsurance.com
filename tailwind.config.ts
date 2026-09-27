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
        cream: "#FBF8F3",
        sand: "#F3EEE6",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#8A3E1A",
          dark: "#6B2F13",
          light: "#B4552D",
          50: "#FBF1EA",
          100: "#F6DFD0",
          200: "#EDC0A3",
          300: "#E09A72",
          400: "#CF7647",
          500: "#B4552D",
          600: "#9C4722",
          700: "#8A3E1A",
          800: "#6B2F13",
          900: "#4F220D",
        },
        sage: {
          DEFAULT: "#57534E",
          dark: "#44403C",
          light: "#78716C",
          50: "#FAF8F5",
          100: "#F3EFEA",
          200: "#E7E1D9",
          300: "#D3CBC0",
          400: "#A8A095",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
        },
        gold: {
          DEFAULT: "#D98F2B",
          dark: "#9A5B12",
          light: "#F0B458",
          50: "#FDF6EA",
          100: "#FAE8C8",
          200: "#F4D08F",
          300: "#EDB65C",
          400: "#E3A03C",
          500: "#D98F2B",
          600: "#B8741C",
        },
        espresso: "#1C1410",
        cocoa: "#2E241E",
        mocha: "#6B625A",
        adobe: "#E0D6CA",
        adobeDark: "#B3A797",
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
          "linear-gradient(180deg, #FBF8F3 0%, #F3EEE6 40%, #EDE4D8 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(138,62,26,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(87,83,78,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #8A3E1A 0%, #B4552D 100%)",
        "sage-gradient": "linear-gradient(135deg, #57534E 0%, #78716C 100%)",
        "gold-gradient": "linear-gradient(135deg, #D98F2B 0%, #F0B458 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(107, 47, 19, 0.22), 0 4px 12px -6px rgba(28, 20, 16, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(107, 47, 19, 0.28), 0 10px 30px -10px rgba(28, 20, 16, 0.10)",
        card: "0 2px 8px -2px rgba(28, 20, 16, 0.06), 0 1px 3px -1px rgba(28, 20, 16, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(107, 47, 19, 0.24), 0 8px 20px -8px rgba(28, 20, 16, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(107, 47, 19, 0.10)",
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
