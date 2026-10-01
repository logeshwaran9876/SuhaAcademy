import fs from 'node:fs';

const pages = [
  'https://www.justdial.com/Chennai/Suha-Academy-Of-Fine-Arts-Old-Perungalathur/044PXX44-XX44-180216211459-E8W3_BZDET',
  'https://www.justdial.com/Chennai/Suha-Academy-Of-Fine-Arts-Old-Perungalathur/044PXX44-XX44-170415163102-F3Z9_BZDET',
  'https://wanderlog.com/place/details/12182076/suha-academy-of-fine-arts-bharathanatyam-dance--carnatic-music',
  'https://www.urbanpro.com/chennai/suha-academy-of-fine-arts-anna-nagar/11151236'
];

async function inspect() {
  for (const url of pages) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      });
      console.log(`URL: ${url} - Status: ${res.status}`);
      if (res.ok) {
        const text = await res.text();
        console.log(`Length: ${text.length}`);
        
        // Extract title
        const titleMatch = text.match(/<title>([^<]+)<\/title>/i);
        if (titleMatch) console.log(`Title: ${titleMatch[1]}`);

        // Search for images on jdmagicbox
        const jdImgs = text.match(/https?:\/\/[^"'<>\s]+\.jdmagicbox\.com\/[^"'<>\s]+\.(?:jpg|jpeg|png|webp)/gi) || [];
        const uniqueJd = [...new Set(jdImgs)];
        console.log(`JD images found: ${uniqueJd.length}`);
        if (uniqueJd.length > 0) {
          console.log('Sample JD images:', uniqueJd.slice(0, 10));
        }

        // Look for telephone or address patterns
        const phoneMatch = text.match(/(?:\+91|0)?[6-9]\d{9}/g) || [];
        console.log('Phone numbers found:', [...new Set(phoneMatch)]);

        // Look for meta description
        const metaDesc = text.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
        if (metaDesc) console.log(`Meta description: ${metaDesc[1]}`);
      }
    } catch (e) {
      console.error(`Error on ${url}:`, e.message);
    }
  }
}

inspect();
