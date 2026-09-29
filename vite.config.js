import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const STATICS_DIR = fileURLToPath(new URL("./statics", import.meta.url));

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".css": "text/css",
};

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

function statics() {
  return {
    name: "kasa-statics",
    configureServer(server) {
      // Retornar a função instala o middleware DEPOIS dos internos do Vite,
      // para que ele só sirva o que o Vite não souber tratar (ex.: /statics/*.jpg).
      return () => {
        server.middlewares.use((req, res, next) => {
          const url = (req.url ?? "").split("?")[0];
          if (!url.startsWith("/statics/")) return next();
          if (/\.(css|js|mjs|jsx|ts|tsx)$/i.test(url)) return next();
          const file = path.join(STATICS_DIR, decodeURIComponent(url.slice(9)));
          if (!file.startsWith(STATICS_DIR) || !fs.existsSync(file)) return next();
          res.setHeader(
            "Content-Type",
            MIME[path.extname(file).toLowerCase()] ?? "application/octet-stream"
          );
          fs.createReadStream(file).pipe(res);
        });
      };
    },
    closeBundle() {
      copyDir(STATICS_DIR, path.resolve("dist/statics"));
    },
  };
}

export default defineConfig({
  plugins: [react(), statics()],
  resolve: {
    alias: {
      "@templates": fileURLToPath(new URL("./templates", import.meta.url)),
      "@statics": STATICS_DIR,
    },
  },
});
