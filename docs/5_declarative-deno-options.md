---
title: Deno CLI options
group: guides
description: Set Deno CLI options in script config files
---
# Setting Deno CLI options

A subset of Deno CLI options can be specified with dedicated properties in config files. 

> Deno options are effectively only applied to `deno` commands that accept them.

## Permissions

Deno [permissions](https://deno.land/manual/getting_started/permissions) can be specified using `allow`.

```yaml
# `allow` can be a list of permission names
allow:
  - net
  - read

scripts:
  start:
    cmd: server.ts
    allow: # or a map
      net: 127.0.0.1
```

## Tsconfig

To specify a `tsconfig`, set the `tsconfig` property.

```yaml
scripts:
  start:
    cmd: server.ts
    tsconfig: tsconfig.json
```

## Import maps

Import maps are specified in `imap`.

```yaml
scripts:
  start:
    cmd: deno run --unstable server.ts
    imap: importmap.json
```

> 🧪 Import maps are currently marked as unstable so the `--unstable` flag must be provided (see [other boolean flags](#other-boolean-flags)).

## Inspect

`inspect` and `inspectBrk` correspond to the `--inspect` and `--inspect-brk` options.

```yaml
scripts:
  start:
    cmd: server.ts
    inspect: 127.0.0.1:9229
```

## Lockfile

The `lock` property sets the namesake Deno option.

```yaml
scripts:
  start:
    cmd: server.ts
    lock: lock.json
```

> ℹ️ Setting this option doesn't create a lock file: you will have to create/update it by passing the `--lock-write` option manually to your script at the appropriate time. More info [here](https://deno.land/manual/linking_to_external_code/integrity_checking).

## Reload

Reload source code cache (recompile TypeScript).

```yaml
scripts:
  start:
    cmd: server.ts
    reload: true                  # Reload everything
    reload: https://deno.land/std # Reload only standard modules
    reload:                       # Reload specific modules
      - https://deno.land/std/fs/utils.ts
      - https://deno.land/std/fmt/colors.ts
```

## Other boolean flags

The `--cached-only`, `--no-check`, `--no-remote`, `--quiet`, `--unstable` options can
be applied using the following properties:

```yaml
scripts:
  start:
    cmd: server.ts
    cachedOnly: true
    noCheck: true
    noRemote: true
    quiet: true
    unstable: true
```

## Log

The `log` property corresponds to deno's `--log-level`. The allowed values are `debug` and `info`.

```yaml
scripts:
  start:
    cmd: server.ts
    log: debug
```

## Cert

Specify a PEM certificate for http client in `cert`.

```yaml
scripts:
  start:
    cmd: server.ts
    cert: certificate.pem
```

## V8 flags

V8 flags can be specified like permissions under the `v8Flags` property.

```yaml
v8Flags:
  - expose-gc
  - async-stack-trace

scripts:
  start:
    cmd: server.ts
    v8Flags:
      logfile: v8.log
```
