import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The pitch: a phone charger that hides from you after midnight, so late-night
// doomscrolling starves of battery. The laugh is the invention itself — a
// charger that unplugs and crawls under the bed — fixing the tiny annoyance
// (reaching for the phone after midnight) in a silly yet weirdly plausible way.
const entry = "A phone charger that unplugs itself and crawls under the bed whenever you reach for your phone after midnight, so your doomscrolling dies of battery starvation.";

// Gate: one sentence, 1-220 characters, not only whitespace (mirrors the competition gate).
if (entry.length < 1 || entry.length > 220 || !/\S/.test(entry)) {
  throw new Error("entry must be 1-220 non-whitespace characters");
}
if ((entry.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(entry)) {
  throw new Error("entry must be exactly one sentence");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry);
