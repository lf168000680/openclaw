# Custom OpenClaw Workflow

This workspace is set up for a custom Docker image while still following upstream updates.

## Current layout

- Local branch: `custom-cn-ui`
- Base commit: `v2026.4.9`
- Tracking branch: `upstream/main`
- GitHub proxy: `http://127.0.0.1:10090`

## Fetch upstream updates

Only fetch:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\custom-sync-upstream.ps1
```

Fetch and merge:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\custom-sync-upstream.ps1 -MergeMain
```

Fetch and rebase:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\custom-sync-upstream.ps1 -RebaseMain
```

## Build your own image

Default image tag:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\custom-build-image.ps1
```

Custom tag:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\custom-build-image.ps1 -ImageTag openclaw:my-custom
```

Slim image:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\custom-build-image.ps1 -Variant slim
```

## Typical update flow

1. Run `custom-sync-upstream.ps1`
2. Resolve any merge or rebase conflicts
3. Build a new image with `custom-build-image.ps1`
4. Update `OPENCLAW_IMAGE` in your local env or compose setup
5. Recreate the container with your custom image

## Notes

- Source changes survive container rebuilds; hot-patching files inside a container does not.
- If upstream changes the same UI files you customized, you will need to resolve conflicts once in the repo, then rebuild the image.
