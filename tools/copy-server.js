import fs from "fs";
import path from "path";

const src = path.resolve("server");
const dest = path.resolve("dist/server");

if (!fs.existsSync(src)) {
  console.error("❌ server folder not found");
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });

console.log("✅ server folder copied into dist");
