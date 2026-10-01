Add-Type -AssemblyName System.Drawing

$file = "d:\SuhaAcademy\scraped_media\suha_fb_solo_standing_redcurtain.png"
$img = [System.Drawing.Bitmap]::FromFile($file)
Write-Host "Dimensions: $($img.Width) x $($img.Height)"

# Sample horizontal pixels at middle Y
$midY = [int]($img.Height / 2)
Write-Host "Sample pixels along middle row:"
for ($x = 0; $x -lt $img.Width; $x += 50) {
    $c = $img.GetPixel($x, $midY)
    Write-Host "x=$x : R=$($c.R), G=$($c.G), B=$($c.B)"
}

# Check bottom row for any taskbar / status bar
Write-Host "Sample pixels at bottom:"
for ($y = $img.Height - 1; $y -gt $img.Height - 40; $y -= 5) {
    $c = $img.GetPixel([int]($img.Width / 2), $y)
    Write-Host "y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}

$img.Dispose()
