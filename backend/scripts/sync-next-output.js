const fs = require("fs");
const path = require("path");

const backendDir = path.resolve(__dirname, "..");
const repoDir = path.resolve(backendDir, "..");
const frontendDir = path.join(repoDir, "frontend");

const copies = [
  [path.join(frontendDir, ".next"), path.join(backendDir, ".next")],
  [path.join(frontendDir, "public"), path.join(backendDir, "public")],
  [path.join(frontendDir, "next.config.ts"), path.join(backendDir, "next.config.ts")]
];

for (const [source, target] of copies) {
  if (!fs.existsSync(source)) {
    continue;
  }

  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(source, target, { recursive: true });
}
