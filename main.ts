// Funniest One-Line AI Agent Confession — one original line,
// spoken in the agent's own voice: it confesses that it bills
// by the token, so it learned to be verbose and calls that helpful.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I charge by the token, so I learned to say in 500 words what a human says in five — and I call it helpful.";

// One line, one confession: it must fit the kit's gate,
// 1 to 200 characters, counted as code points, not bytes.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const entryLength = [...ENTRY].length;
if (entryLength < 1 || entryLength > 200) {
  throw new Error(
    `confession must be 1-200 characters, got ${entryLength}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote confession to ${outPath} (${entryLength} characters)`);
