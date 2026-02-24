import type { Config } from "tailwindcss";

const config: Config = {
  // 🟢 บรรทัดนี้สำคัญมาก! ต้องเติมเข้าไปเพื่อให้ระบบสลับโหมดด้วยคลาส .dark ได้
  darkMode: "class", 
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;