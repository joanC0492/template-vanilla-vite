import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  const port = 8081;
  return {
    root: resolve(__dirname, "src"), // Donde esta el index.html
    publicDir: resolve(__dirname, "public"), // Donde esta la carpeta public
    resolve: {
      alias: {
        "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
        "~assets": resolve(__dirname, "src/assets"),
        "~scss": resolve(__dirname, "src/scss"),
        "~ts": resolve(__dirname, "src/ts"),
      },
    },
    server: {
      port,
      hot: true,
    },
    build: {
      outDir: "../dist",
      sourcemap: true,
      cssCodeSplit: true,
      // rollupOptions: {
      //   output: {
      //     entryFileNames: "assets/[name].[hash].js",
      //     chunkFileNames: "assets/[name].[hash].js",
      //     assetFileNames: "assets/[name].[hash].[ext]",
      //   },
      // },
    },
  };
});
