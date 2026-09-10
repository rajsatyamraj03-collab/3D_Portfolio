import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f8fafc",
        space: {
          950: "#02040a",
          900: "#030712",
          850: "#070d1d",
          800: "#0b132b",
          700: "#111d40",
          600: "#1c2b58",
        },
        cyber: {
          cyan: "#00f0ff",
          blue: "#3b82f6",
          purple: "#a855f7",
          pink: "#ec4899",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
      },
      backgroundImage: {
        "cyber-grid": "radial-gradient(circle, rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.05) 50%, transparent 80%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px -3px rgba(0, 240, 255, 0.35), 0 0 6px -1px rgba(0, 240, 255, 0.5)",
        "neon-purple": "0 0 20px -3px rgba(168, 85, 247, 0.35), 0 0 6px -1px rgba(168, 85, 247, 0.5)",
        "neon-emerald": "0 0 20px -3px rgba(16, 185, 129, 0.35), 0 0 6px -1px rgba(16, 185, 129, 0.5)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "spin-slow": "spin 20s linear infinite",
        "scanline": "scanline 8s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
