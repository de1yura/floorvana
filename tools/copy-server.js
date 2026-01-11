import fs from "fs";
import path from "path";

const src = path.resolve("server");
const dest = path.resolve("dist/server");
const envFile = path.join(dest, ".env");

// read existing .env if it exists
let envBackup = null;
if (fs.existsSync(envFile)) {
  envBackup = fs.readFileSync(envFile);
}

// wipe server folder
fs.rmSync(dest, { recursive: true, force: true });

// copy fresh server files
fs.cpSync(src, dest, { recursive: true });

// restore .env
if (envBackup) {
  fs.writeFileSync(envFile, envBackup);
  console.log("✅ .env preserved");
} else {
  console.log("ℹ️ no existing .env to preserve");
}

console.log("✅ server folder copied into dist");
