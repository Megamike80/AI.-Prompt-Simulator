param(
    [string]$url = "http://localhost:8080/index.html",
    [string]$output = "screenshot.png",
    [int]$width = 1280,
    [int]$height = 950
)

$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chromePath)) {
    $chromePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
}

$tempDir = Join-Path $env:TEMP ("chrome_tmp_" + (Get-Random))
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

$args = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--hide-scrollbars",
    "--window-size=$width,$height",
    "--user-data-dir=$tempDir",
    "--screenshot=$output",
    $url
)

$proc = Start-Process -FilePath $chromePath -ArgumentList $args -Wait -PassThru

Start-Sleep -Seconds 1
Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue

if (Test-Path $output) {
    Write-Output "Screenshot creato con successo: $output ($((Get-Item $output).Length) bytes)"
} else {
    Write-Output "Screenshot NON trovato in $output"
}
