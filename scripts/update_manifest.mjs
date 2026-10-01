import fs from "fs";
import path from "path";

const fbUrl = "https://www.facebook.com/suhaacademy/";
const fbPhotosUrl = "https://www.facebook.com/suhaacademy/photos/";

const existingManifestPath = "d:/SuhaAcademy/Frontend/public/suha_media/manifest.json";
let items = [];
if (fs.existsSync(existingManifestPath)) {
  items = JSON.parse(fs.readFileSync(existingManifestPath, "utf-8"));
}

// Add YouTube channel media
const youtubeItems = [
  {
    url: "https://www.youtube.com/@suhaacademyoffinearts2445",
    filename: "logo.png",
    localPath: "/suha_media/logo.png",
    sourcePlatform: "YouTube",
    title: "Official Golden Academy Medallion Logo"
  },
  {
    url: "https://www.youtube.com/@suhaacademyoffinearts2445",
    filename: "banner.jpg",
    localPath: "/suha_media/banner.jpg",
    sourcePlatform: "YouTube",
    title: "Official Channel Brand Header Banner"
  },
  {
    url: "https://www.youtube.com/watch?v=kAhSLsi6SGM",
    filename: "yt_thumb_kAhSLsi6SGM.jpg",
    localPath: "/suha_media/yt_thumb_kAhSLsi6SGM.jpg",
    sourcePlatform: "YouTube",
    title: "Annual Day 2026 Felicitation (Divyasena, Sai Vignesh, Amit Bhargav)"
  },
  {
    url: "https://www.youtube.com/watch?v=y0wctSag458",
    filename: "yt_thumb_y0wctSag458.jpg",
    localPath: "/suha_media/yt_thumb_y0wctSag458.jpg",
    sourcePlatform: "YouTube",
    title: "Highlights of Annual Day 2026 (Guru Smt. Ranjini Pradeep)"
  },
  {
    url: "https://www.youtube.com/watch?v=_MjuFPRe_vg",
    filename: "yt_thumb__MjuFPRe_vg.jpg",
    localPath: "/suha_media/yt_thumb__MjuFPRe_vg.jpg",
    sourcePlatform: "YouTube",
    title: "Abhayakaram Alavo Bharatanatyam Recital"
  },
  {
    url: "https://www.youtube.com/watch?v=EZWkBVCL6f4",
    filename: "yt_thumb_EZWkBVCL6f4.jpg",
    localPath: "/suha_media/yt_thumb_EZWkBVCL6f4.jpg",
    sourcePlatform: "YouTube",
    title: "Thirumal Perumai Dance Presentation"
  },
  {
    url: "https://www.youtube.com/watch?v=9LY1ZFODUSA",
    filename: "yt_thumb_9LY1ZFODUSA.jpg",
    localPath: "/suha_media/yt_thumb_9LY1ZFODUSA.jpg",
    sourcePlatform: "YouTube",
    title: "Annual Day 2026 Bharatanatyam by Medavakkam Students"
  },
  {
    url: "https://www.youtube.com/watch?v=3oNKmwGmPms",
    filename: "yt_thumb_3oNKmwGmPms.jpg",
    localPath: "/suha_media/yt_thumb_3oNKmwGmPms.jpg",
    sourcePlatform: "YouTube",
    title: "Annual Day 2026 Carnatic Vocal by Medavakkam Students"
  },
  {
    url: "https://www.youtube.com/watch?v=m4pvaRmpwvY",
    filename: "yt_thumb_m4pvaRmpwvY.jpg",
    localPath: "/suha_media/yt_thumb_m4pvaRmpwvY.jpg",
    sourcePlatform: "YouTube",
    title: "Annual Day 2026 Carnatic Vocal by Perumbakkam Students"
  },
  {
    url: "https://www.youtube.com/watch?v=OwXF0DB2X88",
    filename: "yt_thumb_OwXF0DB2X88.jpg",
    localPath: "/suha_media/yt_thumb_OwXF0DB2X88.jpg",
    sourcePlatform: "YouTube",
    title: "Kum. Kamalika Arangetram Lathangi Varnam"
  }
];

// Add Facebook media
const facebookItems = [
  {
    url: fbUrl,
    filename: "fb_cover_banner.jpg",
    localPath: "/suha_media/fb_cover_banner.jpg",
    sourcePlatform: "Facebook",
    title: "Official Facebook Cover Banner (Courses, Medavakkam & Perumbakkam Branches, Contact Info)"
  },
  {
    url: fbUrl,
    filename: "fb_founder_ranjini_pradeep_veena.jpg",
    localPath: "/suha_media/fb_founder_ranjini_pradeep_veena.jpg",
    sourcePlatform: "Facebook",
    title: "Guru Smt. Ranjini Pradeep with Saraswathi Veena (Official Facebook Profile)"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_shivanubhavam_singapore.jpg",
    localPath: "/suha_media/fb_shivanubhavam_singapore.jpg",
    sourcePlatform: "Facebook",
    title: "SHIVANUBHAVAM Singapore Recital at SOTA Drama Theatre (Smt. Ranjini Pradeep & Kum. Kamalika)"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_kkkv_celebrity_poster.jpg",
    localPath: "/suha_media/fb_kkkv_celebrity_poster.jpg",
    sourcePlatform: "Facebook",
    title: "KKKV Celebrity Poster featuring Dr. Divyasena, Sri Sai Vignesh, Sri Amit Bhargav"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_nithyasree_aaradhana.jpg",
    localPath: "/suha_media/fb_nithyasree_aaradhana.jpg",
    sourcePlatform: "Facebook",
    title: "Maha Shivratri Utsav Thyagaraja Aaradhana with Kalaimamani Dr. Nithyasree Mahadevan"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_vasantha_swaranjali.jpg",
    localPath: "/suha_media/fb_vasantha_swaranjali.jpg",
    sourcePlatform: "Facebook",
    title: "Suha's Vasantha Swaranjali - Classical Vocal Recital by Kum. Swathika K"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_kkkv_2025_poster.jpg",
    localPath: "/suha_media/fb_kkkv_2025_poster.jpg",
    sourcePlatform: "Facebook",
    title: "KKKV 2025 Nritya Sangeet Utsav Poster (Sairam Leo Muthu Public School)"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_students_certificates_awards.jpg",
    localPath: "/suha_media/fb_students_certificates_awards.jpg",
    sourcePlatform: "Facebook",
    title: "Annual Day Felicitation - Student Awards, Trophies & Certificates"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_ranjini_vocal_concert_1.jpg",
    localPath: "/suha_media/fb_ranjini_vocal_concert_1.jpg",
    sourcePlatform: "Facebook",
    title: "Guru Smt. Ranjini Pradeep Carnatic Vocal Stage Concert with Mridangam & Violin"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_ranjini_vocal_concert_2.jpg",
    localPath: "/suha_media/fb_ranjini_vocal_concert_2.jpg",
    sourcePlatform: "Facebook",
    title: "Guru Smt. Ranjini Pradeep Classical Vocal Presentation on Stage"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_navaratri_temple_schedule.jpg",
    localPath: "/suha_media/fb_navaratri_temple_schedule.jpg",
    sourcePlatform: "Facebook",
    title: "Navaratri Utsavam 5-Temple Concert Tour Schedule"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_navins_branch_poster.jpg",
    localPath: "/suha_media/fb_navins_branch_poster.jpg",
    sourcePlatform: "Facebook",
    title: "Medavakkam Branch Announcement (Navins Starwood Towers Clubhouse)"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_bollineni_branch_poster.jpg",
    localPath: "/suha_media/fb_bollineni_branch_poster.jpg",
    sourcePlatform: "Facebook",
    title: "Perumbakkam Branch Announcement (Ixora Clubhouse, Bollineni Hillside)"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_weekend_batches_poster.jpg",
    localPath: "/suha_media/fb_weekend_batches_poster.jpg",
    sourcePlatform: "Facebook",
    title: "Admissions Announcement for Weekend & Weekday Classical Batches"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_swathika_temple_concert.jpg",
    localPath: "/suha_media/fb_swathika_temple_concert.jpg",
    sourcePlatform: "Facebook",
    title: "Temple Concert Recital by Suha Academy Student Kum. Swathika K"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_grand_students_ensemble_1.jpg",
    localPath: "/suha_media/fb_grand_students_ensemble_1.jpg",
    sourcePlatform: "Facebook",
    title: "Grand Students Ensemble Recital on Stage"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_ranjini_navins_felicitation.jpg",
    localPath: "/suha_media/fb_ranjini_navins_felicitation.jpg",
    sourcePlatform: "Facebook",
    title: "Felicitation and Recognition of Guru Smt. Ranjini Pradeep at Navins Starwood Towers"
  },
  {
    url: fbPhotosUrl,
    filename: "fb_live_vocal_recital.jpg",
    localPath: "/suha_media/fb_live_vocal_recital.jpg",
    sourcePlatform: "Facebook",
    title: "Live Classical Vocal Recital Broadcast"
  }
];

// Combine unique by filename
const itemMap = new Map();
for (const it of items) {
  itemMap.set(it.filename, it);
}
for (const yt of youtubeItems) {
  itemMap.set(yt.filename, yt);
}
for (const fb of facebookItems) {
  itemMap.set(fb.filename, fb);
}

const combined = Array.from(itemMap.values());

fs.writeFileSync("d:/SuhaAcademy/scraped_media/manifest.json", JSON.stringify(combined, null, 2), "utf-8");
fs.writeFileSync("d:/SuhaAcademy/Frontend/public/suha_media/manifest.json", JSON.stringify(combined, null, 2), "utf-8");

console.log(`Updated manifest with ${combined.length} total entries.`);
