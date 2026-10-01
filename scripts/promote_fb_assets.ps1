$srcDir = "d:\SuhaAcademy\scraped_media"
$destDir = "d:\SuhaAcademy\Frontend\public\suha_media"

# Map high-res 206x206 grid tiles to their named counterparts
$mappings = @{
    "fb_g1_r0_c3.jpg" = "fb_shivanubhavam_singapore.jpg"
    "fb_g1_r0_c4.jpg" = "fb_kkkv_celebrity_poster.jpg"
    "fb_g1_r1_c4.jpg" = "fb_nithyasree_aaradhana.jpg"
    "fb_g1_r2_c0.jpg" = "fb_vasantha_swaranjali.jpg"
    "fb_g2_r0_c3.jpg" = "fb_kkkv_2025_poster.jpg"
    "fb_g2_r1_c1.jpg" = "fb_students_certificates_awards.jpg"
    "fb_g2_r2_c2.jpg" = "fb_ranjini_vocal_concert_1.jpg"
    "fb_g3_r1_c3.jpg" = "fb_navaratri_temple_schedule.jpg"
    "fb_g3_r2_c0.jpg" = "fb_grand_students_ensemble_1.jpg"
    "fb_cover_banner_clean.jpg" = "fb_cover_banner.jpg"
    "fb_founder_veena_clean.jpg" = "fb_founder_ranjini_pradeep_veena.jpg"
}

foreach ($item in $mappings.GetEnumerator()) {
    $srcPath = Join-Path $srcDir $item.Key
    $namedPathInMedia = Join-Path $srcDir $item.Value
    $namedPathInPublic = Join-Path $destDir $item.Value

    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination $namedPathInMedia -Force
        Copy-Item -Path $srcPath -Destination $namedPathInPublic -Force
        Write-Host "Updated $($item.Value) from $($item.Key)"
    }
}

# Also ensure all fb_ files are mirrored into Frontend/public/suha_media
Get-ChildItem -Path $srcDir -Filter "fb_*.jpg" | ForEach-Object {
    $dest = Join-Path $destDir $_.Name
    Copy-Item -Path $_.FullName -Destination $dest -Force
}

Write-Host "Finished copying all Facebook media to public folder."
