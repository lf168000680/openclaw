param(
    [string]$Remote = "upstream",
    [string]$Branch = "main",
    [string]$Proxy = "http://127.0.0.1:10090",
    [switch]$MergeMain,
    [switch]$RebaseMain
)

$ErrorActionPreference = "Stop"

if ($MergeMain -and $RebaseMain) {
    throw "Use either -MergeMain or -RebaseMain, not both."
}

$gitArgs = @(
    "-c", "http.proxy=$Proxy",
    "-c", "https.proxy=$Proxy",
    "fetch", $Remote, "--tags", $Branch
)

Write-Host "Fetching $Remote/$Branch via $Proxy ..."
& git @gitArgs
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

$targetRef = "$Remote/$Branch"

if ($MergeMain) {
    Write-Host "Merging $targetRef into $(git branch --show-current) ..."
    & git merge --no-ff $targetRef
    exit $LASTEXITCODE
}

if ($RebaseMain) {
    Write-Host "Rebasing $(git branch --show-current) onto $targetRef ..."
    & git rebase $targetRef
    exit $LASTEXITCODE
}

Write-Host "Fetch complete."
Write-Host "Next step options:"
Write-Host "  git merge --no-ff $targetRef"
Write-Host "  git rebase $targetRef"
