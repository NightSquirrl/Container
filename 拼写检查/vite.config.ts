// 必须安装 vite-plugin-static-copy ,并配置 viteStaticCopy
// 或者将node_modules/typo-js/dictionarie 这个目录手动复制到public目录中

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    vue(),

    viteStaticCopy({
      targets: [
        {
          src: "node_modules/typo-js/dictionaries",
          dest: "typo",
        },
      ],
    }),
  ],
});
