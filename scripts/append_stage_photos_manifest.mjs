import fs from "fs";

const fbUrl = "https://www.facebook.com/photo/?fbid=10244599512262794&set=pcb.10244599513662829";

const manifestPath = "d:/SuhaAcademy/Frontend/public/suha_media/manifest.json";
let items = [];
if (fs.existsSync(manifestPath)) {
  items = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
}

const newItems = [
  {
    url: fbUrl,
    filename: "suha_fb_solo_standing_redcurtain_clean.jpg",
    localPath: "/suha_media/suha_fb_solo_standing_redcurtain_clean.jpg",
    sourcePlatform: "Facebook",
    title: "Classical Bharatanatyam Solo Abhinaya on Red Curtain Stage"
  },
  {
    url: fbUrl,
    filename: "suha_fb_duet_redcurtain_clean.jpg",
    localPath: "/suha_media/suha_fb_duet_redcurtain_clean.jpg",
    sourcePlatform: "Facebook",
    title: "Classical Duet Stage Presentation in Silk Costumes"
  },
  {
    url: fbUrl,
    filename: "suha_fb_solo_seated_redcurtain_clean.jpg",
    localPath: "/suha_media/suha_fb_solo_seated_redcurtain_clean.jpg",
    sourcePlatform: "Facebook",
    title: "Muzhumandi Seated Mudra & Classical Bhava on Stage"
  },
  {
    url: fbUrl,
    filename: "suha_fb_solo_natya_redcurtain_clean.jpg",
    localPath: "/suha_media/suha_fb_solo_natya_redcurtain_clean.jpg",
    sourcePlatform: "Facebook",
    title: "Classical Natya Expression & Movement on Stage"
  },
  {
    url: fbUrl,
    filename: "suha_hero_theatre_banner.jpg",
    localPath: "/suha_media/suha_hero_theatre_banner.jpg",
    sourcePlatform: "Facebook / Theatrical Composition",
    title: "Master Theatrical Classical Stage Hero Banner with Solo Dancer"
  },
  {
    url: fbUrl,
    filename: "suha_hero_duet_banner.jpg",
    localPath: "/suha_media/suha_hero_duet_banner.jpg",
    sourcePlatform: "Facebook / Theatrical Composition",
    title: "Master Theatrical Classical Stage Hero Banner with Classical Duet"
  }
];

const itemMap = new Map();
for (const it of items) {
  itemMap.set(it.filename, it);
}
for (const ni of newItems) {
  itemMap.set(ni.filename, ni);
}

const combined = Array.from(itemMap.values());
fs.writeFileSync("d:/SuhaAcademy/scraped_media/manifest.json", JSON.stringify(combined, null, 2), "utf-8");
fs.writeFileSync("d:/SuhaAcademy/Frontend/public/suha_media/manifest.json", JSON.stringify(combined, null, 2), "utf-8");

console.log(`Updated manifest with ${combined.length} entries.`);
