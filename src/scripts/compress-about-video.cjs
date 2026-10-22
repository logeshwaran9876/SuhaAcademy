const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ABOUT_DIR = path.resolve(__dirname, '../public/suha_media/about');
const inputVideo = path.join(ABOUT_DIR, 'About-Video.mp4');
const outputVideo = path.join(ABOUT_DIR, 'About-Video-compressed.mp4');
const posterImage = path.join(ABOUT_DIR, 'about_video_poster.jpg');

console.log('=== Suha Academy: About Showcase Video Compression ===');

if (!fs.existsSync(inputVideo)) {
  console.error(`Input file not found: ${inputVideo}`);
  process.exit(1);
}

const originalSize = fs.statSync(inputVideo).size;
console.log(`Original video size: ${(originalSize / (1024 * 1024)).toFixed(2)} MB`);

// 1. Extract poster frame at 0.5s if not present
if (!fs.existsSync(posterImage)) {
  console.log('Extracting poster frame...');
  execSync(`ffmpeg -y -ss 00:00:01 -i "${inputVideo}" -vframes 1 -q:v 2 "${posterImage}"`, { stdio: 'inherit' });
}

// 2. Compress video with FFmpeg
const ffmpegCmd = `ffmpeg -y -i "${inputVideo}" -vf "scale=1920:1080:flags=lanczos" -c:v libx264 -preset slow -crf 20 -profile:v high -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 160k "${outputVideo}"`;

console.log('Running FFmpeg compression (CRF 20, 1080p Lanczos, FastStart, AAC Audio)...');
execSync(ffmpegCmd, { stdio: 'inherit' });

const compressedSize = fs.statSync(outputVideo).size;
const reduction = (((originalSize - compressedSize) / originalSize) * 100).toFixed(1);
console.log(`\nCompressed size: ${(compressedSize / (1024 * 1024)).toFixed(2)} MB (${reduction}% reduction)`);

fs.copyFileSync(outputVideo, inputVideo);
fs.unlinkSync(outputVideo);
console.log(`Successfully optimized About-Video.mp4!`);
