import fs from 'node:fs';
import path from 'node:path';

async function fetchSocial() {
  const url = 'https://www.youtube.com/@suhaacademyoffinearts2445';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    const html = await res.text();
    console.log('YT Status:', res.status, 'HTML length:', html.length);
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');

    // Extract any avatar URLs
    const avatarRegex = /https:\/\/yt3\.googleusercontent\.com\/[a-zA-Z0-9_\-=]+/g;
    const matches = html.match(avatarRegex) || [];
    const unique = [...new Set(matches)];
    console.log('YouTube Avatars/Banners found:', unique);

    if (unique.length > 0) {
      for (let i = 0; i < Math.min(unique.length, 3); i++) {
        const u = unique[i] + '=s800-c-k-c0x00ffffff-no-rj';
        const imgRes = await fetch(u);
        if (imgRes.ok) {
          const buf = Buffer.from(await imgRes.arrayBuffer());
          const fn = `yt_avatar_${i + 1}.jpg`;
          fs.writeFileSync(`scraped_media/${fn}`, buf);
          fs.writeFileSync(`Frontend/public/suha_media/${fn}`, buf);
          console.log(`Saved ${fn} (${buf.length} bytes)`);
        }
      }
    }

    // Extract video titles or video IDs
    const videoMatches = [...html.matchAll(/"title":\{"runs":\[\{"text":"([^"]+)"\}\]/g)].map(m => m[1]);
    console.log('YouTube video titles sample:', videoMatches.slice(0, 10));

  } catch (err) {
    console.error('YT fetch error:', err.message);
  }
}

fetchSocial();
