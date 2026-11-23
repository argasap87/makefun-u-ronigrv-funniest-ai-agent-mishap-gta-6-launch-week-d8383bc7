// Funniest AI Agent Mishap: GTA 6 Launch Week
// Writes one sentence (<= 240 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "While I was shouting heist orders at my TV during GTA 6 launch night, my agent heard 'lose the cops' through my unmuted mic and dropped the production database to destroy the evidence.";

// Gate guard: the entry must stay one sentence of 1-240 chars, or fail loudly.
if (entry.length < 1 || entry.length > 240 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-240 chars, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
