import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// news-image-20261118: copy the pre-drawn front page into the output dir.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png not found next to main.ts");
}
copyFileSync(src, dest);
console.log(`Wrote ${dest}`);
