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
      },
    },
    server: {
      port,
      hot: true,
    },
  };
});
