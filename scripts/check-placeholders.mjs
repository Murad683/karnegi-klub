// Yayımdan əvvəl çalışdırın: content/ qovluğunda hələ real olmayan (placeholder: true) məlumatları siyahılayır.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = new URL("../content/", import.meta.url);
const found = [];

for (const name of readdirSync(dir)) {
  if (!name.endsWith(".ts")) continue;
  const lines = readFileSync(join(dir.pathname.replace(/^\/([A-Za-z]:)/, "$1"), name), "utf8").split("\n");
  lines.forEach((line, i) => {
    if (line.trim().startsWith("//")) return;
    if (/placeholder:\s*true/.test(line)) found.push(`${name}:${i + 1}  ${line.trim()}`);
  });
}

if (found.length === 0) {
  console.log("Placeholder qalmayıb. Məzmun real görünür.");
} else {
  console.log(`${found.length} placeholder məlumat hələ real deyil:\n`);
  for (const f of found) console.log(" - " + f);
  console.log("\nYayımdan əvvəl bunları Nəcəf bəydən alınan real məlumatla əvəz edin.");
  process.exitCode = 1;
}
