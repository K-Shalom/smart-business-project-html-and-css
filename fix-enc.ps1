$file = "c:\Users\K.Shalom\Documents\JAVA FILES & PROJECT\FRONTEND SAMPLE\cashier-sales.html"

$text = [IO.File]::ReadAllText($file)
$text = $text -replace 'â€“', '–'
$text = $text -replace 'â€”', '—'
$text = $text -replace 'â€"', '—'
$text = $text -replace 'â†’', '→'
$text = $text -replace 'â• ', '═'
$text = $text -replace 'â”€', '─'
$text = $text -replace 'â€', '”'
[IO.File]::WriteAllText($file, $text)

Write-Host "Encoding fixed!"
