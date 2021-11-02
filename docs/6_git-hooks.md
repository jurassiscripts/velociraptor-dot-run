---
title: Git Hooks
group: guides
description: How to link your vr scripts to git hooks
---

# Git Hooks

With Velociraptor you can link your scripts to git hooks in order to easily share them with your teammates.

> ℹ️ Vr git hooks support `bash`/`zsh`, `fish` and `PowerShell`.

## Linking scripts to hooks

To link one of your scripts to a particular git hook add a `gitHook` property to its definition:

```yaml
scripts:
  format:
    cmd: deno fmt
    gitHook: pre-commit
```

A git hook can be linked to a single vr script. In order to execute multiple scripts in a single git hook, create a
composite script that executes the other scripts (more on this topic in [Composite scripts](docs/composite-scripts)):

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

To start using hooks, [link](#linking-scripts-to-hooks) at least one of your scripts to a git hook, then run any `vr`
command:

```sh
$ vr
```

If you see the message

> ✅ Git hooks successfully installed

you're good to go! From now on your git hooks will be managed by Velociraptor.

Don't forget to tell your users or teammates to run `vr` at least once in order to activate hooks.

## Using git args

Git hook arguments are not passed directly to your scripts, but instead inside a `GIT_ARGS` shell array. So to access
them simply write `${GIT_ARGS[1]}`, `${GIT_ARGS[2]}` etc. instead of `$1`, `$2`, ...:

```yaml
scripts:
  commitlint:
    cmd: npx commitlint -x @commitlint/config-conventional -e ${GIT_ARGS[1]}
    desc: Checks commit messages format
    gitHook: commit-msg
```

> ℹ️ If you need to write complex multiline scripts, consider using yaml [block strings](https://yaml-multiline.info/)
> (`|`) or [ES template literals](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Template_literals).

## Skipping hooks

To prevent Velociraptor from installing and running hooks, set the `VR_HOOKS` env variable to `false` (for example in
your CI configuration).
