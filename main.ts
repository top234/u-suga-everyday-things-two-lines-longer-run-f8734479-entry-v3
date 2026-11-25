import { mkdirSync, writeFileSync } from "node:fs";

// v3 entry: shadow. Chosen over zipper ("tiny hands") and elevator
// ("closet on ropes") because "dark twin" is the most surprising,
// most visible to a 10-year-old, and the second line names the real
// mechanism (blocked sunlight) plus a concrete limit.
const lines = [
  "Your shadow is a dark twin that copies every move you make, but it can never pick anything up.",
  "It shows how your shape follows your moves, but leaves out that it is only blocked sunlight, so it disappears when the light goes out.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
