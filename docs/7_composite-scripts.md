---
title: Composite scripts
group: guides
description: How to create serial and concurrent script flows
---
# Composite scripts

With Velociraptor you can create serial and parallel scripts directly in your configuration files.

## Serial scripts

Arrays of commands are executed serially:

```yaml
scripts:
  start:
    - deno run one.ts
    - deno run two.ts
  test: # Composite scripts can contain script objects as well
    - deno test test_one.ts
    - cmd: deno test test_two.ts
      tsconfig: tsconfig.json
```

## Concurrent scripts

To declare concurrent commands, list them in the `pll` property of an object.

```yaml
scripts:
  start:
    pll: # These commands are executed in parallel
      - deno run one.ts
      - deno run two.ts
```

## Complex composite scripts

Combine serial and concurrent commands to create complex execution flows:

```yaml
scripts:
  start:
    - pll:
        - deno run one.ts
        - deno run two.ts
    - deno run three.ts
```

> Commands in composite scripts are executed separately; if you need to use pipes/redirections you can use your shell's
> syntax.
