// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss", "vue3-marquee/dist/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [],
  modules: [],
});
