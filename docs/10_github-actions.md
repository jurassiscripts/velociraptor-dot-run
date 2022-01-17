---
title: GitHub Actions
group: guides
description: How to use Velociraptor in GitHub Actions
---
# Use Velociraptor in your GitHub Actions

To use velociraptor in your GitHub Actions workflow include the [`jurassiscripts/setup-velociraptor@v2`](https://github.com/marketplace/actions/setup-velociraptor) action:

```yaml
steps:
  - uses: jurassiscripts/setup-velociraptor@v2
  - run: vr ...
```

For convenience, it can also automatically run [`actions/checkout@v2`](https://github.com/marketplace/actions/checkout) and [`denoland/setup-deno@1`](https://github.com/marketplace/actions/setup-deno) to make your workflow less verbose.

It is however possible to disable this behaviour by passing `false` to `checkout` and/or `deno-version`:

```yaml
steps:
  - uses: jurassiscripts/setup-velociraptor@v2
    with:
      checkout: false
      deno-version: false
```

## Install a specific version

To install a specific Velociraptor version provide the `velociraptor-version` input variable:

```yaml
steps:
  - uses: jurassiscripts/setup-velociraptor@v2
    with:
      velociraptor-version: 1.3.0
  - run: vr ...
```

## Change executable alias

To change the default executable name (`vr`) use the `velociraptor-alias` variable:

```yaml
steps:
  - uses: jurassiscripts/setup-velociraptor@v2
    with:
      velociraptor-alias: velo
  - run: velo ...
```

## Install a specific deno version

To install a specific Deno version provide the `deno-version` input variable:

```yaml
steps:
  - uses: jurassiscripts/setup-velociraptor@v2
    with:
      deno-version: 1.6.3
  - run: vr ...
```

This input is forwarded to [`denoland/setup-deno@1`](https://github.com/marketplace/actions/setup-deno), check its documentation for supported syntax.
