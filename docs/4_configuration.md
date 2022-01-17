---
title: Configuration
group: guides
description: How to configure Velociraptor scripts
---

# Configuration

Velociraptor accepts YAML, JSON, TypeScript or JavaScript configuration files. Config files can be named `scripts.<EXT>`
or
`velociraptor.<EXT>` where `EXT` is one of `yml`, `yaml`, `json`, `ts`, `js` or `mjs`
.

[Deno configuration files](https://deno.land/manual/getting_started/configuration_file) (`deno.json`/`deno.jsonc`) are
supported as well: specify your config under the `velociraptor` key.

## Format

In its simplest form, the scripts mapping behaves like in package.json: the keys are script names and the values are
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

More script object properties are detailed in the next guides.

## Config files reference

See the complete config files
reference [here](https://doc.deno.land/https/deno.land/x/velociraptor/src/scripts_config.ts). 
