Add-Type -AssemblyName System.Drawing

function Slice-Grid($srcPath, $prefix, $startY) {
    if (-not (Test-Path $srcPath)) { return }
    $img = [System.Drawing.Image]::FromFile($srcPath)
    
    $cardW = 206
    $cardH = 206
    $gap = 6
    $startX = 432

    for ($row = 0; $row -lt 3; $row++) {
        $y = $startY + ($row * ($cardH + $gap))
        if ($y + $cardH -gt $img.Height) { break }

        for ($col = 0; $col -lt 5; $col++) {
            $x = $startX + ($col * ($cardW + $gap))
            if ($x + $cardW -gt $img.Width) { break }

            $rect = New-Object System.Drawing.Rectangle($x, $y, $cardW, $cardH)
            $bmp = New-Object System.Drawing.Bitmap($cardW, $cardH)
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $cardW, $cardH)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

            $name = "${prefix}_r${row}_c${col}.jpg"
            $bmp.Save("d:\SuhaAcademy\scraped_media\$name", [System.Drawing.Imaging.ImageFormat]::Jpeg)
            $bmp.Save("d:\SuhaAcademy\Frontend\public\suha_media\$name", [System.Drawing.Imaging.ImageFormat]::Jpeg)

            $g.Dispose()
            $bmp.Dispose()
        }
    }
    $img.Dispose()
    Write-Output "Sliced grid for $prefix"
}

# Grid 1: starts around y = 168
Slice-Grid "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8\.tempmediaStorage\media_1790843583754.png" "fb_g1" 168

# Grid 2: starts around y = 156
Slice-Grid "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8\.tempmediaStorage\media_1790843606602.png" "fb_g2" 156

# Grid 3: starts around y = 196
Slice-Grid "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8\.tempmediaStorage\media_1790843633771.png" "fb_g3" 196
