Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8\.tempmediaStorage\"
$outDir1 = "d:\SuhaAcademy\scraped_media\"
$outDir2 = "d:\SuhaAcademy\Frontend\public\suha_media\"

function Crop-Image($srcFile, $x, $y, $w, $h, $destName) {
    $fullSrc = Join-Path $srcDir $srcFile
    if (-not (Test-Path $fullSrc)) {
        Write-Error "File not found: $fullSrc"
        return
    }
    $srcImg = [System.Drawing.Image]::FromFile($fullSrc)
    
    # Boundary check
    if ($x + $w -gt $srcImg.Width) { $w = $srcImg.Width - $x }
    if ($y + $h -gt $srcImg.Height) { $h = $srcImg.Height - $y }

    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($srcImg, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $srcImg.Dispose()

    $dest1 = Join-Path $outDir1 $destName
    $dest2 = Join-Path $outDir2 $destName
    $bmp.Save($dest1, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Save($dest2, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Output "Saved: $destName ($w x $h)"
}

# 1. Profile Picture: Guru Smt. Ranjini Pradeep with Veena (from media_1790843567040.png)
# Screen width: 1920, height: 1080
# Profile avatar is positioned at x ~ 335, y ~ 468, diameter ~ 168
Crop-Image "media_1790843567040.png" 332 466 172 172 "fb_founder_ranjini_pradeep_veena.jpg"

# 2. Cover Banner (from media_1790843567040.png)
# Banner is between x ~ 296, y ~ 76, w ~ 940, h ~ 362
Crop-Image "media_1790843567040.png" 296 76 940 362 "fb_cover_banner.jpg"

# Photos Grid 1 (media_1790843583754.png)
# Top-left of grid is ~ x 346, y 170. Each card is ~164x164, gap ~4px
# Row 1 Col 4: Shivanubhavam Singapore
Crop-Image "media_1790843583754.png" 850 170 164 164 "fb_shivanubhavam_singapore.jpg"

# Row 1 Col 5: KKKV 2026 Celebrity Chief Guests
Crop-Image "media_1790843583754.png" 1018 170 164 164 "fb_kkkv_celebrity_poster.jpg"

# Row 2 Col 5: Nithyasree Mahadevan Thyagaraja Aaradhana
Crop-Image "media_1790843583754.png" 1018 338 164 164 "fb_nithyasree_aaradhana.jpg"

# Row 3 Col 1: Vasantha Swaranjali by Kum. Swathika K
Crop-Image "media_1790843583754.png" 346 506 164 164 "fb_vasantha_swaranjali.jpg"

# Row 3 Col 2: Swathika K temple concert
Crop-Image "media_1790843583754.png" 514 506 164 164 "fb_swathika_temple_concert.jpg"

# Row 3 Col 4: Live vocal recital
Crop-Image "media_1790843583754.png" 850 506 164 164 "fb_live_vocal_recital.jpg"

# Photos Grid 2 (media_1790843606602.png)
# Row 1 Col 1: Bollineni Ixora Branch poster
Crop-Image "media_1790843606602.png" 346 158 164 164 "fb_bollineni_branch_poster.jpg"

# Row 1 Col 2: Navins Branch poster
Crop-Image "media_1790843606602.png" 514 158 164 164 "fb_navins_branch_poster.jpg"

# Row 1 Col 4: KKKV 2025 Nritya Sangeet Utsav
Crop-Image "media_1790843606602.png" 850 158 164 164 "fb_kkkv_2025_poster.jpg"

# Row 2 Col 2: Students with certificates and Guru
Crop-Image "media_1790843606602.png" 514 326 164 164 "fb_students_certificates_awards.jpg"

# Row 3 Col 1: Guru Ranjini Pradeep concert smile
Crop-Image "media_1790843606602.png" 346 494 164 164 "fb_ranjini_vocal_concert_1.jpg"

# Row 3 Col 3: Guru Ranjini Pradeep singing with bhava
Crop-Image "media_1790843606602.png" 682 494 164 164 "fb_ranjini_vocal_concert_2.jpg"

# Photos Grid 3 (media_1790843633771.png)
# Row 2 Col 4: Navaratri 5-Temple Schedule
Crop-Image "media_1790843633771.png" 850 432 164 164 "fb_navaratri_temple_schedule.jpg"

# Row 2 Col 5: Weekend batches poster
Crop-Image "media_1790843633771.png" 1018 432 164 164 "fb_weekend_batches_poster.jpg"

# Row 3 Col 1: Grand ensemble of 40+ students at Navins
Crop-Image "media_1790843633771.png" 346 600 164 164 "fb_grand_students_ensemble_1.jpg"

# Row 3 Col 5: Guru Ranjini Pradeep receiving honor at Navins
Crop-Image "media_1790843633771.png" 1018 600 164 164 "fb_ranjini_navins_felicitation.jpg"

Write-Output "All Facebook media successfully extracted!"
