---
title: GitHub Actions
group: guides
description: How to use Velociraptor in GitHub Actions
---
# Use Velociraptor in your GitHub Actions

To use velociraptor in your GitHub Actions workflow include the `jurassiscripts/setup-velociraptor@v1` action after `denolib/setup-deno@v2`:

```yaml
steps:
  - uses: denoland/setup-deno@v1
  - uses: jurassiscripts/setup-velociraptor@v1
  - run: vr ...
```

## Install a specific version

To install a specific Velociraptor version provide the `velociraptor-version` input variable:

```yaml
steps:
  - uses: denoland/setup-deno@v1
  - uses: jurassiscripts/setup-velociraptor@v1
    with:
      velociraptor-version: 1.0.0
  - run: vr ...
```

## Change executable alias

To change the default executable name (`vr`) use the `velociraptor-alias` variable:

```yaml
steps:
  - uses: denoland/setup-deno@v1
  - uses: jurassiscripts/setup-velociraptor@v1
    with:
      velociraptor-alias: velo
  - run: velo ...
```
