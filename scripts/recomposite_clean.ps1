Add-Type -AssemblyName System.Drawing

$cleanBgPath = "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8\clean_theatre_curtains_1790845646241.jpg"
$destDir1 = "d:\SuhaAcademy\scraped_media"
$destDir2 = "d:\SuhaAcademy\Frontend\public\suha_media"

# 1. Copy clean background
Copy-Item $cleanBgPath (Join-Path $destDir1 "clean_theatre_stage.jpg") -Force
Copy-Item $cleanBgPath (Join-Path $destDir2 "clean_theatre_stage.jpg") -Force

function Create-CompositeBanner($dancerFile, $outputName, $targetX) {
    $bg = [System.Drawing.Bitmap]::FromFile($cleanBgPath)
    $dancer = [System.Drawing.Bitmap]::FromFile($dancerFile)
    
    $canvasW = 1920
    $canvasH = 1080
    $composite = New-Object System.Drawing.Bitmap($canvasW, $canvasH)
    $g = [System.Drawing.Graphics]::FromImage($composite)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    
    # Draw background scaled to 1920x1080
    $g.DrawImage($bg, [System.Drawing.Rectangle]::new(0, 0, $canvasW, $canvasH))
    
    # Scale dancer to height ~840px
    $targetHeight = 840.0
    $scale = $targetHeight / $dancer.Height
    $dw = [int]($dancer.Width * $scale)
    $dh = [int]($dancer.Height * $scale)
    
    # Position dancer on right side of stage, floor aligned
    $dx = $targetX
    $dy = $canvasH - $dh - 45
    
    # Feather dancer left edge smoothly
    $softDancer = New-Object System.Drawing.Bitmap($dancer.Width, $dancer.Height)
    $sg = [System.Drawing.Graphics]::FromImage($softDancer)
    $sg.DrawImage($dancer, 0, 0)
    $sg.Dispose()
    
    $featherWidth = [Math]::Min(80, $dancer.Width)
    for ($x = 0; $x -lt $featherWidth; $x++) {
        $factor = [Math]::Pow($x / [double]$featherWidth, 1.4)
        for ($y = 0; $y -lt $dancer.Height; $y++) {
            $c = $dancer.GetPixel($x, $y)
            $newA = [int]($c.A * $factor)
            $softDancer.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($newA, $c.R, $c.G, $c.B))
        }
    }
    
    $g.DrawImage($softDancer, [System.Drawing.Rectangle]::new($dx, $dy, $dw, $dh))
    
    # Add a soft dark gradient on the left (0 to 950 px) so left text has superb contrast
    $leftBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        [System.Drawing.Point]::new(0, 0),
        [System.Drawing.Point]::new(950, 0),
        [System.Drawing.Color]::FromArgb(235, 10, 5, 8),
        [System.Drawing.Color]::FromArgb(0, 10, 5, 8)
    )
    $g.FillRectangle($leftBrush, [System.Drawing.Rectangle]::new(0, 0, 950, $canvasH))
    $leftBrush.Dispose()
    
    # Save
    $out1 = Join-Path $destDir1 $outputName
    $out2 = Join-Path $destDir2 $outputName
    
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
    
    $composite.Save($out1, $codec, $encoderParams)
    $composite.Save($out2, $codec, $encoderParams)
    Write-Host "Created clean $outputName"
    
    $g.Dispose()
    $composite.Dispose()
    $bg.Dispose()
    $dancer.Dispose()
    $softDancer.Dispose()
}

# Solo dancer banner
Create-CompositeBanner "d:\SuhaAcademy\scraped_media\suha_fb_solo_standing_redcurtain_clean.jpg" "suha_hero_theatre_banner.jpg" 1220

# Duet dancers banner
Create-CompositeBanner "d:\SuhaAcademy\scraped_media\suha_fb_duet_redcurtain_clean.jpg" "suha_hero_duet_banner.jpg" 1180

Write-Host "Re-compositing complete with 100% clean background!"
