---
title: GitHub Actions
group: guides
---
# Use Velociraptor in your GitHub Actions

To use velociraptor in your GitHub Actions workflow include the `jurassiscripts/setup-velociraptor@master` action after `denolib/setup-deno@v2`:

```yaml
steps:
  - uses: denolib/setup-deno@v2
  - uses: jurassiscripts/setup-velociraptor@master
  - run: vr ...
```

## Install a specific version

To install a specific Velociraptor version provide the `velociraptor-version` input variable:

```yaml
steps:
  - uses: denolib/setup-deno@v2
  - uses: jurassiscripts/setup-velociraptor@master
    with:
      velociraptor-version: 1.0.0
  - run: vr ...
```
