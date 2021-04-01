---
title: Configuration
group: getting-started
---
# Configuration

Velociraptor accepts YAML, JSON or TypeScript configuration files. Config files can be named `scripts.<EXT>` or
`velociraptor.<EXT>` where `EXT` is one of `yml`, `yaml`, `json` or `ts`.

## Format

In its simplest form, the scripts property behaves like in package.json: the keys are script names and the values are
command strings:

```yaml
# scripts.yaml
scripts:
  start: deno run --allow-net server.ts
  test: deno test --allow-net server_test.ts
```

```json
// scripts.json
{
  "scripts": {
    "start": "deno run --allow-net server.ts",
    "test": "deno test --allow-net server_test.ts"
  }
}
```

```ts
// scripts.ts
export default {
  scripts: {
    start: "deno run --allow-net server.ts",
    test: "deno test --allow-net server_test.ts",
  },
};
```

### Compact deno run

When a command starts with a `.ts` or `.js` file, `deno run` is automatically prepended:

```yaml
scripts:
  start: server.ts # Equivalent to `deno run server.ts`
```

## More script options

Scripts can also be objects:

```yaml
scripts:
  start:
    desc: Runs the server
    cmd: deno run --allow-net server.ts
```

In this case the command(s) are specified in the `cmd` property. Use the `desc` property to provide a description of
what the script does, it'll be shown in the list of available scripts (when running `vr` without arguments).

---

> 👇 The following properties can be specified both in script objects and at top-level, in which case they are applied
> to all the scripts defined in the file. Deno options are effectively only applied to `deno` commands that accept them.

---

### Permissions

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

### Environment variables

Environment variables can be specified in the `env` mapping. You can also read environment variables from one or more
dotenv file, just list them in the `envFile` property.

```yaml
# Env vars specified here are sent to
# all the scripts
envFile:
  - .env
env:
  PORT: 8081

scripts:
  start:
    cmd: deno run --allow-net server.ts
    # these are script-specific
    envFile: .server_env
    env:
      PORT: 8082
```

> Read more on this topic in [Environment variables](/docs/environment-variables).

### Watch

Use the `watch` property to watch for file changes and restart processes automatically.

> Only local files from entry point module graph are watched

```yaml
scripts:
  start:
    cmd: server.ts
    watch: true
```

### Tsconfig

To specify a `tsconfig`, set the `tsconfig` property.

```yaml
scripts:
  start:
    cmd: server.ts
    tsconfig: tsconfig.json
```

### Import maps

Import maps are specified in `imap`.

```yaml
scripts:
  start:
    cmd: deno run --unstable server.ts
    imap: importmap.json
```

> 🧪 Import maps are currently marked as unstable so the `--unstable` flag must be provided (see [other boolean flags](#other-boolean-flags)).

### Inspect

`inspect` and `inspectBrk` correspond to the `--inspect` and `--inspect-brk` options.

```yaml
scripts:
  start:
    cmd: server.ts
    inspect: 127.0.0.1:9229
```

### Lockfile

The `lock` property sets the namesake Deno option.

```yaml
scripts:
  start:
    cmd: server.ts
    lock: lock.json
```

> ⚠️ Setting this option doesn't create a lock file: you will have to create/update it by passing the `--lock-write` option manually to your script at the appropriate time. More info [here](https://deno.land/manual/linking_to_external_code/integrity_checking).

### Reload

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

### Other boolean flags

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

### Log

The `log` property corresponds to deno's `--log-level`. The allowed values are `debug` and `info`.

```yaml
scripts:
  start:
    cmd: server.ts
    log: debug
```

### Cert

Specify a PEM certificate for http client in `cert`.

```yaml
scripts:
  start:
    cmd: server.ts
    cert: certificate.pem
```

### V8 flags

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

---

Read more about config files in the Guides pages. See the complete config API
[here](https://doc.deno.land/https/deno.land/x/velociraptor/src/scripts_config.ts). 
