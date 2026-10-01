$cutoff = (Get-Date).AddMinutes(-30)
$paths = @(
    "C:\Users\Madhan\.gemini\antigravity-ide\brain\840cf89d-11ed-40cb-930b-795b86730bf8",
    "C:\Users\Madhan\AppData\Local\Temp"
)

foreach ($p in $paths) {
    if (Test-Path $p) {
        Get-ChildItem -Path $p -Recurse -Include *.jpg,*.png,*.jpeg,*.webp -ErrorAction SilentlyContinue |
            Where-Object { $_.LastWriteTime -gt $cutoff } |
            Sort-Object LastWriteTime -Descending |
            Select-Object FullName, Length, LastWriteTime |
            Format-Table -AutoSize
    }
}
