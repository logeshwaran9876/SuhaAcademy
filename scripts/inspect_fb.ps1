Add-Type -AssemblyName System.Drawing
$files = Get-ChildItem 'd:\SuhaAcademy\scraped_media\fb_*.jpg'
$results = foreach ($f in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($f.FullName)
        [PSCustomObject]@{
            Name   = $f.Name
            Width  = $img.Width
            Height = $img.Height
            KB     = [math]::Round($f.Length / 1024, 1)
        }
        $img.Dispose()
    } catch {
        [PSCustomObject]@{
            Name   = $f.Name
            Width  = 0
            Height = 0
            KB     = [math]::Round($f.Length / 1024, 1)
        }
    }
}
$results | Format-Table -AutoSize
