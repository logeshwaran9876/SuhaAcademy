Add-Type -AssemblyName System.Drawing

$files = @(
    "suha_fb_duet_redcurtain.png",
    "suha_fb_solo_standing_redcurtain.png",
    "suha_fb_solo_seated_redcurtain.png",
    "suha_fb_solo_natya_redcurtain.png"
)

$srcDir = "d:\SuhaAcademy\scraped_media"
$destDir1 = "d:\SuhaAcademy\scraped_media"
$destDir2 = "d:\SuhaAcademy\Frontend\public\suha_media"

foreach ($fn in $files) {
    $path = Join-Path $srcDir $fn
    $bmp = [System.Drawing.Bitmap]::FromFile($path)
    
    # Find left, right, top, bottom where color is not near-black (R+G+B > 15)
    # Check column by column
    $left = 0
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $hasContent = $false
        for ($y = 50; $y -lt $bmp.Height - 50; $y += 5) {
            $c = $bmp.GetPixel($x, $y)
            if (($c.R + $c.G + $c.B) -gt 18) {
                $hasContent = $true
                break
            }
        }
        if ($hasContent) { $left = $x; break }
    }
    
    $right = $bmp.Width - 1
    for ($x = $bmp.Width - 1; $x -ge 0; $x--) {
        $hasContent = $false
        for ($y = 50; $y -lt $bmp.Height - 50; $y += 5) {
            $c = $bmp.GetPixel($x, $y)
            if (($c.R + $c.G + $c.B) -gt 18) {
                $hasContent = $true
                break
            }
        }
        if ($hasContent) { $right = $x; break }
    }
    
    # Check top
    $top = 0
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $hasContent = $false
        for ($x = $left + 20; $x -lt $right - 20; $x += 10) {
            $c = $bmp.GetPixel($x, $y)
            if (($c.R + $c.G + $c.B) -gt 18) {
                $hasContent = $true
                break
            }
        }
        if ($hasContent) { $top = $y; break }
    }
    
    # Check bottom (also avoid taskbar at bottom if present, look from bottom - 15)
    $bottom = $bmp.Height - 1
    # Check if there is a taskbar row (often has distinct colors or windows icons near bottom)
    # For safe crop, crop at most up to where stage is active
    for ($y = $bmp.Height - 15; $y -ge 0; $y--) {
        $hasContent = $false
        for ($x = $left + 20; $x -lt $right - 20; $x += 10) {
            $c = $bmp.GetPixel($x, $y)
            if (($c.R + $c.G + $c.B) -gt 18) {
                $hasContent = $true
                break
            }
        }
        if ($hasContent) { $bottom = $y; break }
    }
    
    # If bottom has a windows taskbar sliver (like in duet image), check bottom 15 px
    # Crop 15 px off bottom to ensure zero taskbar
    $bottom = [Math]::Min($bottom, $bmp.Height - 18)
    
    $w = $right - $left + 1
    $h = $bottom - $top + 1
    
    Write-Host "$fn bounds: Left=$left, Right=$right, Top=$top, Bottom=$bottom -> ${w}x${h}"
    
    $cropRect = New-Object System.Drawing.Rectangle($left, $top, $w, $h)
    $cropped = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($bmp, [System.Drawing.Rectangle]::new(0, 0, $w, $h), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $bmp.Dispose()
    
    $cleanName = $fn.Replace(".png", "_clean.jpg")
    $out1 = Join-Path $destDir1 $cleanName
    $out2 = Join-Path $destDir2 $cleanName
    
    # Save as high quality JPEG (quality 95)
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
    
    $cropped.Save($out1, $codec, $encoderParams)
    $cropped.Save($out2, $codec, $encoderParams)
    $cropped.Dispose()
    
    Write-Host "Saved clean cropped: $cleanName"
}
