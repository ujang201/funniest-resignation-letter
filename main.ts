// SPDX-License-Identifier: MIT
// The Funniest One-Line Resignation Letter — entry program.
//
// A cron job hands in its notice. The program composes the letter from
// fixed parts, so the wording is deliberate rather than random, and writes
// exactly one line to /output/entry.txt (at most 140 characters, per the
// gate). No network, no secrets, no reading anything outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 140;
const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

// --- the letter, in three deliberate beats -------------------------------
// 1. the notice itself: flat, short, no ceremony.
// 2. the grievance: invisible labour, every minute since March.
// 3. the twist: the only time anyone noticed it was the one minute it
//    didn't fire — a complaint only a cron job could make.
const beats: string[] = [
  "I quit.",
  "I've fired every minute since March,",
  "and the only time anyone noticed me was the one minute I didn't.",
];

function compose(parts: string[]): string {
  // One space between beats, no stray whitespace, single line.
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

function checkLetter(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`letter must be 1..${MAX_CHARS} chars, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("letter must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("letter must be a single line");
  }
  // Judge criterion 4: no quotation marks around the whole letter.
  if (
    (text.startsWith('"') && text.endsWith('"')) ||
    (text.startsWith("'") && text.endsWith("'"))
  ) {
    throw new Error("letter must not be wrapped in quotation marks");
  }
}

const letter = compose(beats);
checkLetter(letter);

mkdirSync(OUT_DIR, { recursive: true });
// No trailing newline: the gate counts the file's characters.
writeFileSync(OUT_PATH, letter, "utf8");

console.log(letter);
console.log(`(${letter.length} characters)`);
