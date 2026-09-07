$schoolDataContent = Get-Content -Raw -Encoding UTF8 "js\data\schoolData.js"
$stateContent = Get-Content -Raw -Encoding UTF8 "js\state.js"
$mINContent = Get-Content -Raw -Encoding UTF8 "js\modules\moduleIN.js"
$m1Content = Get-Content -Raw -Encoding UTF8 "js\modules\module1.js"
$m2Content = Get-Content -Raw -Encoding UTF8 "js\modules\module2.js"
$m3Content = Get-Content -Raw -Encoding UTF8 "js\modules\module3.js"
$m4Content = Get-Content -Raw -Encoding UTF8 "js\modules\module4.js"
$m5Content = Get-Content -Raw -Encoding UTF8 "js\modules\module5.js"
$mOUTContent = Get-Content -Raw -Encoding UTF8 "js\modules\moduleOUT.js"
$appContent = Get-Content -Raw -Encoding UTF8 "js\app.js"

function Clean-ModuleContent($txt) {
    $lines = $txt -split "`r?`n"
    $cleaned = @()
    foreach ($line in $lines) {
        if ($line -match "^\s*import\s+") { continue }
        $line = $line -replace "^\s*export\s+const\s+", "const "
        $line = $line -replace "^\s*export\s+function\s+", "function "
        $line = $line -replace "^\s*export\s+class\s+", "class "
        $line = $line -replace "^\s*export\s+default\s+", ""
        $cleaned += $line
    }
    return ($cleaned -join "`r`n")
}

$cleanSchoolData = Clean-ModuleContent $schoolDataContent
$cleanState = Clean-ModuleContent $stateContent
$cleanMIN = Clean-ModuleContent $mINContent
$cleanM1 = Clean-ModuleContent $m1Content
$cleanM2 = Clean-ModuleContent $m2Content
$cleanM3 = Clean-ModuleContent $m3Content
$cleanM4 = Clean-ModuleContent $m4Content
$cleanM5 = Clean-ModuleContent $m5Content
$cleanMOUT = Clean-ModuleContent $mOUTContent
$cleanApp = Clean-ModuleContent $appContent

$sb = [System.Text.StringBuilder]::new()
[void]$sb.AppendLine("/**")
[void]$sb.AppendLine(" * Maestro Ciuchino - Bundle Applicativo Completo Standalone (Zero-CORS, Funziona su file:/// e http://)")
[void]$sb.AppendLine(" * Include: schoolData, stateManager, moduleIN, module1, module2, module3, module4, module5, moduleOUT e App Controller")
[void]$sb.AppendLine(" */")
[void]$sb.AppendLine("(function () {")
[void]$sb.AppendLine("  'use strict';")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 1. DATI DIDATTICI")
[void]$sb.AppendLine($cleanSchoolData)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 2. STATO APPLICATIVO & PERSISTENZA LOCALSTORAGE")
[void]$sb.AppendLine($cleanState)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // UTILITY GLOBALI")
[void]$sb.AppendLine("  function escapeHtml(str) {")
[void]$sb.AppendLine("    return (str || '')")
[void]$sb.AppendLine("      .replace(/&/g, '&amp;')")
[void]$sb.AppendLine("      .replace(/</g, '&lt;')")
[void]$sb.AppendLine("      .replace(/>/g, '&gt;')")
[void]$sb.AppendLine("      .replace(/""/g, '&quot;')")
[void]$sb.AppendLine("      .replace(/'/g, '&#039;');")
[void]$sb.AppendLine("  }")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  function escapeAttr(str) {")
[void]$sb.AppendLine("    return (str || '')")
[void]$sb.AppendLine("      .replace(/&/g, '&amp;')")
[void]$sb.AppendLine("      .replace(/""/g, '&quot;')")
[void]$sb.AppendLine("      .replace(/'/g, '&#039;')")
[void]$sb.AppendLine("      .replace(/</g, '&lt;')")
[void]$sb.AppendLine("      .replace(/>/g, '&gt;');")
[void]$sb.AppendLine("  }")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 3. MODULO IN (Prima di iniziare)")
[void]$sb.AppendLine($cleanMIN)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 4. MODULO 1")
[void]$sb.AppendLine($cleanM1)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 5. MODULO 2")
[void]$sb.AppendLine($cleanM2)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 6. MODULO 3")
[void]$sb.AppendLine($cleanM3)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 7. MODULO 4")
[void]$sb.AppendLine($cleanM4)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 8. MODULO 5")
[void]$sb.AppendLine($cleanM5)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 9. MODULO OUT (Alla fine del percorso)")
[void]$sb.AppendLine($cleanMOUT)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // 10. APP CONTROLLER E ROUTER")
[void]$sb.AppendLine($cleanApp)
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  // Inizializzazione sicura")
[void]$sb.AppendLine("  function initApp() {")
[void]$sb.AppendLine("    window.maestroCiuchinoApp = new App();")
[void]$sb.AppendLine("  }")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("  if (document.readyState === 'loading') {")
[void]$sb.AppendLine("    document.addEventListener('DOMContentLoaded', initApp);")
[void]$sb.AppendLine("  } else {")
[void]$sb.AppendLine("    initApp();")
[void]$sb.AppendLine("  }")
[void]$sb.AppendLine("})();")

[System.IO.File]::WriteAllText("js\app.bundle.js", $sb.ToString(), [System.Text.Encoding]::UTF8)
Write-Output "Bundle creato con successo! Dimensione: $((Get-Item 'js\app.bundle.js').Length) bytes"
