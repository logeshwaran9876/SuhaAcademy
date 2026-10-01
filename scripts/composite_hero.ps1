Add-Type -AssemblyName System.Drawing

$bgFile = "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8\hero_theatre_bg_1790844914828.jpg"
$dancerFile = "d:\SuhaAcademy\scraped_media\suha_fb_solo_standing_redcurtain_clean.jpg"
$duetFile = "d:\SuhaAcademy\scraped_media\suha_fb_duet_redcurtain_clean.jpg"

$bg = [System.Drawing.Bitmap]::FromFile($bgFile)
$dancer = [System.Drawing.Bitmap]::FromFile($dancerFile)

Write-Host "BG: $($bg.Width)x$($bg.Height), Dancer: $($dancer.Width)x$($dancer.Height)"

# We want to create a clean canvas of 1920x1080
$canvasW = 1920
$canvasH = 1080
$composite = New-Object System.Drawing.Bitmap($canvasW, $canvasH)
$g = [System.Drawing.Graphics]::FromImage($composite)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

# Draw the background scaled to 1920x1080
$g.DrawImage($bg, [System.Drawing.Rectangle]::new(0, 0, $canvasW, $canvasH))

# Now on the right side, draw the dancer
# Let the dancer height be around 850px, placed on the stage
$dancerScale = 900.0 / $dancer.Height
$dancerW = [int]($dancer.Width * $dancerScale)
$dancerH = [int]($dancer.Height * $dancerScale)

# Position on the right: x between 1100 and 1250, bottom aligned to floor (y = 1080 - dancerH - 30)
$dancerX = 1200
$dancerY = $canvasH - $dancerH - 40

# Create a soft-edged bitmap for the dancer to blend left edge with the curtains
$softDancer = New-Object System.Drawing.Bitmap($dancer.Width, $dancer.Height)
$sg = [System.Drawing.Graphics]::FromImage($softDancer)
$sg.DrawImage($dancer, 0, 0)
$sg.Dispose()

# Feather the left edge of softDancer (first 80 px) and bottom edge (first 30 px)
for ($x = 0; $x -lt [Math]::Min(100, $dancer.Width); $x++) {
    $alphaFactor = [Math]::Pow($x / 100.0, 1.5)
    for ($y = 0; $y -lt $dancer.Height; $y++) {
        $c = $dancer.GetPixel($x, $y)
        $newA = [int]($c.A * $alphaFactor)
        $softDancer.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($newA, $c.R, $c.G, $c.B))
    }
}

$g.DrawImage($softDancer, [System.Drawing.Rectangle]::new($dancerX, $dancerY, $dancerW, $dancerH))

# Also cover any logo on the left of $bgFile by drawing a rich dark gradient overlay on the left 55%
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    [System.Drawing.Point]::new(0, 0),
    [System.Drawing.Point]::new(1100, 0),
    [System.Drawing.Color]::FromArgb(250, 10, 5, 8),
    [System.Drawing.Color]::FromArgb(0, 10, 5, 8)
)
$g.FillRectangle($brush, [System.Drawing.Rectangle]::new(0, 0, 1100, $canvasH))
$brush.Dispose()

# Save composite
$outPath1 = "d:\SuhaAcademy\scraped_media\suha_hero_theatre_banner.jpg"
$outPath2 = "d:\SuhaAcademy\Frontend\public\suha_media\suha_hero_theatre_banner.jpg"

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

$composite.Save($outPath1, $codec, $encoderParams)
$composite.Save($outPath2, $codec, $encoderParams)

Write-Host "Saved suha_hero_theatre_banner.jpg successfully."

$g.Dispose()
$composite.Dispose()
$bg.Dispose()
$dancer.Dispose()
$softDancer.Dispose()
