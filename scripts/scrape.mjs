import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDirs = [
  path.resolve(__dirname, '../scraped_media'),
  path.resolve(__dirname, '../Frontend/public/suha_media')
];

for (const d of targetDirs) {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
}

const directUrls = [
  // Justdial direct images
  'https://content.jdmagicbox.com/v2/comp/chennai/w3/044pxx44.xx44.180216211459.e8w3/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-for-bharatnatyam-5auiZB7Vrn.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/w3/044pxx44.xx44.180216211459.e8w3/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-for-bharatnatyam-PeihxFzhch.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/w3/044pxx44.xx44.180216211459.e8w3/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-for-bharatnatyam-moUDiZlrcz.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/w3/044pxx44.xx44.180216211459.e8w3/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-for-bharatnatyam-K8jYin2fyg.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/w3/044pxx44.xx44.180216211459.e8w3/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-for-bharatnatyam-bkGgapngIO.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/z9/044pxx44.xx44.170415163102.f3z9/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-retmzc.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/z9/044pxx44.xx44.170415163102.f3z9/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-181x8mg.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/z9/044pxx44.xx44.170415163102.f3z9/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-21weekp.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/z9/044pxx44.xx44.170415163102.f3z9/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-va60bb.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/z9/044pxx44.xx44.170415163102.f3z9/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-1sax7bz.jpg',
  'https://content.jdmagicbox.com/v2/comp/chennai/z9/044pxx44.xx44.170415163102.f3z9/catalogue/suha-academy-of-fine-arts-old-perungalathur-chennai-dance-classes-o92bxr.jpg',
  // Event posters
  'https://kidscontests.in/wp-content/uploads/kodai-kalaai-vizha-2026.jpg',
  'https://kidscontests.in/wp-content/uploads/kodaikala-vizha2024.jpg',
  'https://kidscontests.in/wp-content/uploads/mandala-workshop.jpg'
];

async function downloadFile(url, filename) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    });

    if (!res.ok) {
      console.error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
      return false;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 1000) {
      console.warn(`Warning: ${url} returned very small file (${buffer.length} bytes)`);
    }

    for (const d of targetDirs) {
      fs.writeFileSync(path.join(d, filename), buffer);
    }
    console.log(`Saved ${filename} (${buffer.length} bytes)`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return false;
  }
}

async function scrapePages() {
  const pages = [
    { url: 'https://kidscontests.in/2026/05/kodai-kaalai-kalai-vizha-2026/', name: 'kkkv_2026' },
    { url: 'https://kidscontests.in/2024/05/kodai-kaala-kalai-vizha-2024-carnatic-music-vocal-bharathanatyam-dance-competitions/', name: 'kkkv_2024' },
    { url: 'https://kidscontests.in/2022/04/kkkv-2022-kodai-kaala-kalai-vizha-2022-competitions/', name: 'kkkv_2022' },
    { url: 'https://kidscontests.in/2021/09/mandala-art-workshop-organised-by-suha-academy/', name: 'mandala_2021' },
    { url: 'https://www.cofee.life/events/kodai-kaala-kalai-vizha%E2%80%94kkkv-2026/evnt_sCjgvv39vL5894', name: 'cofee_2026' }
  ];

  const scrapedImages = [];
  const scrapedDetails = {};

  for (const page of pages) {
    console.log(`Fetching page ${page.url}...`);
    try {
      const res = await fetch(page.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.warn(`Failed page ${page.url}: ${res.status}`);
        continue;
      }
      const text = await res.text();
      scrapedDetails[page.name] = text;

      // Extract image tags
      const matches = text.match(/https?:\/\/[^"'\s)]+\.(?:jpg|jpeg|png|webp)/gi) || [];
      for (const m of matches) {
        if (!m.includes('wp-includes') && !m.includes('gravatar') && !m.includes('plugins') && !m.includes('theme') && !m.includes('logo')) {
          if (!scrapedImages.includes(m) && !directUrls.includes(m)) {
            scrapedImages.push(m);
          }
        }
      }
    } catch (e) {
      console.error(`Error on page ${page.url}:`, e.message);
    }
  }

  return { scrapedImages, scrapedDetails };
}

async function run() {
  console.log('Downloading direct media...');
  let idx = 1;
  const manifest = [];

  for (const url of directUrls) {
    const ext = path.extname(new URL(url).pathname) || '.jpg';
    let baseName = path.basename(new URL(url).pathname);
    if (!baseName || baseName.length > 50) {
      baseName = `suha_img_${idx}${ext}`;
    }
    const cleanName = baseName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const success = await downloadFile(url, cleanName);
    if (success) {
      manifest.push({
        url,
        filename: cleanName,
        localPath: `/suha_media/${cleanName}`
      });
    }
    idx++;
  }

  console.log('\nScraping additional pages...');
  const { scrapedImages, scrapedDetails } = await scrapePages();
  console.log(`Found ${scrapedImages.length} additional images on event pages:`, scrapedImages);

  for (const imgUrl of scrapedImages) {
    try {
      const parsed = new URL(imgUrl);
      const cleanName = 'extra_' + path.basename(parsed.pathname).replace(/[^a-zA-Z0-9._-]/g, '_');
      const success = await downloadFile(imgUrl, cleanName);
      if (success) {
        manifest.push({
          url: imgUrl,
          filename: cleanName,
          localPath: `/suha_media/${cleanName}`
        });
      }
    } catch (e) {
      console.error('Failed to parse URL', imgUrl);
    }
  }

  // Save manifest & text details
  fs.writeFileSync(
    path.resolve(__dirname, '../scraped_media/manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  fs.writeFileSync(
    path.resolve(__dirname, '../Frontend/public/suha_media/manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\nFinished downloading. Manifest saved with ${manifest.length} items.`);
}

run();
