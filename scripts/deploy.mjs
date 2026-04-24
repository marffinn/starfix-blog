import { execSync, spawnSync } from "node:child_process";

function run(cmd, opts = {}) {
  return execSync(cmd, { stdio: "pipe", encoding: "utf8", ...opts }).trim();
}

function runInherit(cmd) {
  const [file, ...args] = cmd.split(" ");
  const r = spawnSync(file, args, { stdio: "inherit", shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

function fail(msg) {
  console.error(`\n\u274c ${msg}\n`);
  process.exit(1);
}

try {
  run("git rev-parse --is-inside-work-tree");
} catch {
  fail("Not inside a git repository.");
}

const branch = run("git rev-parse --abbrev-ref HEAD");
if (branch !== "main") {
  fail(`Deploy must run from 'main'. You are on '${branch}'.`);
}

const status = run("git status --porcelain");

if (status) {
  console.log("\u2713 Changes detected, staging...");
  runInherit("git add -A");

  const cliMessage = process.argv.slice(2).join(" ").trim();
  const stamp = new Date().toISOString().replace("T", " ").slice(0, 16);
  const message = cliMessage || `Content update via CMS (${stamp})`;

  runInherit(`git commit -m "${message.replace(/"/g, '\\"')}"`);
} else {
  console.log("\u2713 Working tree clean, checking if push is needed...");
}

const ahead = run("git rev-list --count origin/main..HEAD");
if (ahead === "0") {
  console.log("\n\u2713 Nothing to push. Remote is already up to date.\n");
  process.exit(0);
}

console.log(`\u2713 Pushing ${ahead} commit(s) to origin/main...`);
runInherit("git push origin main");

console.log("\n\u2728 Push complete.");
console.log("   Watch the deploy: https://github.com/marffinn/starfix-blog/actions");
console.log("   Live site: https://marffinn.github.io/starfix-blog/\n");
