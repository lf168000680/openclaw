param(
    [string]$ImageTag = "openclaw:custom-cn-ui",
    [string]$DockerfilePath = "Dockerfile",
    [ValidateSet("default", "slim")]
    [string]$Variant = "default",
    [string]$ExtraAptPackages = "",
    [switch]$InstallBrowser,
    [switch]$InstallDockerCli,
    [switch]$NoCache
)

$ErrorActionPreference = "Stop"

$dockerArgs = @(
    "build",
    "-f", $DockerfilePath,
    "-t", $ImageTag,
    "--build-arg", "OPENCLAW_VARIANT=$Variant"
)

if ($ExtraAptPackages) {
    $dockerArgs += @("--build-arg", "OPENCLAW_DOCKER_APT_PACKAGES=$ExtraAptPackages")
}

if ($InstallBrowser) {
    $dockerArgs += @("--build-arg", "OPENCLAW_INSTALL_BROWSER=1")
}

if ($InstallDockerCli) {
    $dockerArgs += @("--build-arg", "OPENCLAW_INSTALL_DOCKER_CLI=1")
}

if ($NoCache) {
    $dockerArgs += "--no-cache"
}

$dockerArgs += "."

Write-Host "Building image $ImageTag ..."
& docker @dockerArgs
exit $LASTEXITCODE
