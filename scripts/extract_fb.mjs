import fs from 'node:fs';

const logPath = 'C:/Users/Madhan/.gemini/antigravity-ide/brain/840cf89d-11ed-40cb-930b-795b86730bf8/.system_generated/logs/transcript_full.jsonl';

try {
  const content = fs.readFileSync(logPath, 'utf8');
  const matches = content.match(/https:\\\/\\\/[^\s"'\\]+fbcdn\.net[^\s"'\\]+/g) || [];
  const directMatches = content.match(/https:\/\/[^\s"'\\]+fbcdn\.net[^\s"'\\]+/g) || [];

  const all = [...matches, ...directMatches];
  const cleaned = [...new Set(all.map(u => {
    return u.replace(/\\\//g, '/').replace(/\\u0026/g, '&').replace(/\\/g, '');
  }))];

  console.log(`Found ${cleaned.length} fbcdn URLs:`);
  cleaned.forEach((u, i) => console.log(`${i + 1}: ${u}`));

  fs.writeFileSync('scripts/fb_urls.json', JSON.stringify(cleaned, null, 2));
} catch (e) {
  console.error('Error reading log:', e.message);
}
