param(
    [string]$brainDir = "C:\Users\mprim\.gemini\antigravity\brain\c6c8d069-4825-42d8-8492-eb1b13a1b5fc"
)

$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chromePath)) {
    $chromePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
}

function Capture-StateScreenshot($stateJson, $outFile, $width=1280, $height=1050, $scrollToSelector="") {
    $tempDir = Join-Path $env:TEMP ("chrome_tmp_" + (Get-Random))
    New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

    $targetUrl = "http://localhost:8080/index.html"
    if ($scrollToSelector -ne "") {
        $targetUrl += "?scroll=" + [System.Web.HttpUtility]::UrlEncode($scrollToSelector)
    }

    $htmlContent = @"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script>
        localStorage.setItem('maestro_ciuchino_state_v1', JSON.stringify($stateJson));
        window.location.href = '$targetUrl';
    </script>
</head>
<body>
    <p>Caricamento stato di test...</p>
</body>
</html>
"@
    $runnerFile = Join-Path $PWD "temp_runner.html"
    [System.IO.File]::WriteAllText($runnerFile, $htmlContent, [System.Text.Encoding]::UTF8)

    $args = @(
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--hide-scrollbars",
        "--window-size=$width,$height",
        "--user-data-dir=$tempDir",
        "--screenshot=$outFile",
        "http://localhost:8080/temp_runner.html"
    )

    $proc = Start-Process -FilePath $chromePath -ArgumentList $args -Wait -PassThru
    Start-Sleep -Milliseconds 800

    Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -Path $runnerFile -Force -ErrorAction SilentlyContinue

    Write-Output "Screenshot salvato: $outFile"
}

# 1. Screenshot Modulo IN con errore e spiegazione visibile
$stateErrorIN = @{
    currentModule = "in"
    currentLevel = "primaria"
    completedModules = @{ "in" = $false; "1" = $false; "2" = $false; "3" = $false; "4" = $false; "5" = $false; "out" = $false }
    mInQuizAnswers = @{
        q_in_1 = @{
            selectedIdx = 0 # Errato (Cerca documento in archivio)
            isCorrect = $false
            retryCount = 1
        }
    }
} | ConvertTo-Json -Compress

Capture-StateScreenshot $stateErrorIN (Join-Path $brainDir "screen_module_in_wrong_answer.png") 1280 950

# 2. Screenshot Modulo IN con completamento e riepilogo finale
$stateSummaryIN = @{
    currentModule = "in"
    currentLevel = "primaria"
    completedModules = @{ "in" = $true; "1" = $false; "2" = $false; "3" = $false; "4" = $false; "5" = $false; "out" = $false }
    mInQuizAnswers = @{
        q_in_1 = @{ selectedIdx = 1; isCorrect = $true; retryCount = 1 } # Aveva sbagliato al primo tentativo
        q_in_2 = @{ selectedIdx = 1; isCorrect = $true; retryCount = 0 }
        q_in_3 = @{ selectedIdx = 2; isCorrect = $true; retryCount = 0 }
        q_in_4 = @{ selectedIdx = 1; isCorrect = $true; retryCount = 1 } # Aveva sbagliato al primo tentativo
        q_in_5 = @{ selectedIdx = 1; isCorrect = $true; retryCount = 0 }
        q_in_6 = @{ selectedIdx = 1; isCorrect = $true; retryCount = 0 }
    }
} | ConvertTo-Json -Compress

Capture-StateScreenshot $stateSummaryIN (Join-Path $brainDir "screen_module_in_summary.png") 1280 4200

# 3. Screenshot Modulo OUT con riquadri di orientamento e collegamenti diretti
$stateSummaryOUT = @{
    currentModule = "out"
    currentLevel = "primaria"
    completedModules = @{ "in" = $true; "1" = $true; "2" = $true; "3" = $true; "4" = $true; "5" = $true; "out" = $true }
    mOutQuizAnswers = @{
        q_out_pri_1 = @{ selectedIdx = 1; isCorrect = $true; retryCount = 1 } # Modulo 1 da riprendere
        q_out_pri_2 = @{ selectedIdx = 1; isCorrect = $true; retryCount = 0 }
        q_out_pri_3 = @{ selectedIdx = 1; isCorrect = $true; retryCount = 1 } # Modulo 4 da riprendere
        q_out_pri_4 = @{ selectedIdx = 0; isCorrect = $true; retryCount = 0 }
        q_out_pri_5 = @{ selectedIdx = 2; isCorrect = $true; retryCount = 0 }
    }
} | ConvertTo-Json -Compress

Capture-StateScreenshot $stateSummaryOUT (Join-Path $brainDir "screen_module_out_orientation.png") 1280 3800

# 4. Screenshot Modulo OUT - Fascia Infanzia (Quesito COACH e fiabe)
$stateOutInfanzia = @{
    currentModule = "out"
    currentLevel = "infanzia"
    completedModules = @{ "in" = $true; "1" = $true; "2" = $true; "3" = $true; "4" = $true; "5" = $true; "out" = $false }
    mOutQuizAnswers = @{}
} | ConvertTo-Json -Compress

Capture-StateScreenshot $stateOutInfanzia (Join-Path $brainDir "screen_module_out_infanzia.png") 1280 1000

# 5. Screenshot Modulo OUT - Fascia Secondaria (Quesito COACH e prove strutturate)
$stateOutSecondaria = @{
    currentModule = "out"
    currentLevel = "secondaria"
    completedModules = @{ "in" = $true; "1" = $true; "2" = $true; "3" = $true; "4" = $true; "5" = $true; "out" = $false }
    mOutQuizAnswers = @{}
} | ConvertTo-Json -Compress

Capture-StateScreenshot $stateOutSecondaria (Join-Path $brainDir "screen_module_out_secondaria.png") 1280 1000
