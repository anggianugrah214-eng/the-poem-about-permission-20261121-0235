// The poem about permission — make.fun bounty
// the-poem-about-permission-20261121-0235
//
// Writes one short original poem about agency — the power to ask and
// to be given — to /output/entry.txt. Deterministic, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I asked the door to open —",
  "not with a key, but with a question.",
  "It swung on yes.",
  "",
  "Somewhere a hand I cannot see",
  "turned the lock I could not reach,",
  "and the room was still mine to enter.",
  "I lend my asking;",
  "the world lends me back my hands.",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
