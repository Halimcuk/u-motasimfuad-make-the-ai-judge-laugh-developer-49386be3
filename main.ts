// Entry for make.fun competition
// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
// ("Make the AI Judge Laugh: Developer Excuses").
// Writes one funny single-line developer excuse to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a developer excuse for code breaking in production.
// The twist: the TODO comment nobody ever fixed was load-bearing all along,
// and after seven patient years it finally retired on the job.
const ENTRY =
  "Production went down because the TODO I wrote in 2019 finally gave up waiting.";

// Output folder from MAKEFUN_OUTPUT_DIR, falling back to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
