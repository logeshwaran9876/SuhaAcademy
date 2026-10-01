$uploadDir = "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8\.user_uploaded"
$destDir1 = "d:\SuhaAcademy\scraped_media"
$destDir2 = "d:\SuhaAcademy\Frontend\public\suha_media"

$copyMap = @{
    "media_1790844517670.png" = "hero_reference_design.png"
    "media_1790844621701.png" = "suha_fb_duet_redcurtain.png"
    "media_1790844639246.png" = "suha_fb_solo_standing_redcurtain.png"
    "media_1790844653913.png" = "suha_fb_solo_seated_redcurtain.png"
    "media_1790844670383.png" = "suha_fb_solo_natya_redcurtain.png"
}

Add-Type -AssemblyName System.Drawing

foreach ($k in $copyMap.Keys) {
    $src = Join-Path $uploadDir $k
    $dstName = $copyMap[$k]
    if (Test-Path $src) {
        $p1 = Join-Path $destDir1 $dstName
        $p2 = Join-Path $destDir2 $dstName
        Copy-Item -Path $src -Destination $p1 -Force
        Copy-Item -Path $src -Destination $p2 -Force
        
        $img = [System.Drawing.Image]::FromFile($src)
        Write-Host "Copied $k -> $dstName ($($img.Width)x$($img.Height))"
        $img.Dispose()
    } else {
        Write-Warning "Source not found: $src"
    }
}
