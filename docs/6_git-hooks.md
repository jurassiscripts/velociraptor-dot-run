---
title: Git Hooks
group: guides
description: How to link your vr scripts to git hooks
---
# Git Hooks

With Velociraptor you can link your scripts to git hooks in order to easily share them with your teammates.

## Linking scripts to hooks

To link one of your scripts to a particular git hook add a `gitHook` property to its definition:

```yaml
scripts:
  format:
    cmd: deno fmt
    gitHook: pre-commit
```

A git hook can be linked to a single vr script. In order to execute multiple scripts in a single git hook, create
a composite script that executes the other scripts (more on this topic in [Composite scripts](docs/composite-scripts)):

```yaml
scripts:
  lint: deno lint
  format: deno fmt
  pre-commit:
    cmd:
      - vr lint
      - vr format
    gitHook: pre-commit
```

## Installing hooks

To start using hooks, [link](#linking-scripts-to-hooks) at least one of your scripts to a git hook, then run any `vr` command:

```sh
$ vr
```

If you see the message

> ✅ Git hooks successfully installed

you're good to go! From now on your git hooks will be managed by Velociraptor.

Don't forget to tell your users or teammates to run `vr` at least once in order to activate hooks.

## Skipping hooks

To prevent Velociraptor from installing and running hooks, set the `VR_HOOKS` env variable to `false` (for example in
your CI configuration).
