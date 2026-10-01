import fs from 'node:fs';

async function getYTvideos() {
  try {
    const res = await fetch('https://www.youtube.com/@suhaacademyoffinearts2445/videos', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    const html = await res.text();

    const videoIdMatches = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
    const uniqueIds = [...new Set(videoIdMatches)];
    console.log('Unique video IDs found:', uniqueIds.length, uniqueIds);

    const videoData = [];
    for (const id of uniqueIds) {
      // Find title nearby
      const idx = html.indexOf(id);
      if (idx !== -1) {
        const slice = html.slice(idx, idx + 1000);
        const titleMatch = slice.match(/"text":"([^"]+)"/);
        const title = titleMatch ? titleMatch[1] : `Suha Academy Performance ${id}`;
        videoData.push({
          id,
          title,
          url: `https://www.youtube.com/watch?v=${id}`,
          thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
        });
      }
    }

    console.log('Processed videos:', videoData.length);
    fs.writeFileSync('scraped_media/youtube_videos.json', JSON.stringify(videoData, null, 2));

    // Download top video thumbnails
    for (let i = 0; i < Math.min(videoData.length, 8); i++) {
      const v = videoData[i];
      try {
        const imgRes = await fetch(v.thumbnail);
        if (imgRes.ok) {
          const buf = Buffer.from(await imgRes.arrayBuffer());
          const fn = `yt_thumb_${v.id}.jpg`;
          fs.writeFileSync(`scraped_media/${fn}`, buf);
          fs.writeFileSync(`Frontend/public/suha_media/${fn}`, buf);
          console.log(`Saved thumb ${fn} (${buf.length} bytes) for: ${v.title}`);
        }
      } catch (e) {
        console.error('Error fetching thumb', v.id, e.message);
      }
    }

  } catch (e) {
    console.error('Error in getYTvideos:', e.message);
  }
}

getYTvideos();
