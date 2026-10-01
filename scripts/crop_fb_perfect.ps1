Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8\.tempmediaStorage\media_1790843567040.png"
$img = [System.Drawing.Image]::FromFile($src)

# Let's inspect where the banner is:
# Width of image is 1920.
# The banner is centered: x = 370, y = 64, w = 1180, h = 436.
$rectBanner = New-Object System.Drawing.Rectangle(370, 64, 1180, 436)
$bmpBanner = New-Object System.Drawing.Bitmap(1180, 436)
$g1 = [System.Drawing.Graphics]::FromImage($bmpBanner)
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g1.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, 1180, 436)), $rectBanner, [System.Drawing.GraphicsUnit]::Pixel)
$bmpBanner.Save("d:\SuhaAcademy\scraped_media\fb_cover_banner_clean.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpBanner.Save("d:\SuhaAcademy\Frontend\public\suha_media\fb_cover_banner_clean.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g1.Dispose()
$bmpBanner.Dispose()

# Avatar circle: Let's find exact coordinates
# Look at media_1790843567040.png: avatar circle is on the left of "Suha Academy of Fine Arts" text.
# The circle has white border. Let's crop a window around x=415, y=425, w=215, h=215
$rectAv = New-Object System.Drawing.Rectangle(415, 425, 215, 215)
$bmpAv = New-Object System.Drawing.Bitmap(215, 215)
$g2 = [System.Drawing.Graphics]::FromImage($bmpAv)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, 215, 215)), $rectAv, [System.Drawing.GraphicsUnit]::Pixel)
$bmpAv.Save("d:\SuhaAcademy\scraped_media\fb_founder_veena_clean.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpAv.Save("d:\SuhaAcademy\Frontend\public\suha_media\fb_founder_veena_clean.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g2.Dispose()
$bmpAv.Dispose()

$img.Dispose()
Write-Output "Banner and Avatar cropped successfully!"
