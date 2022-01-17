---
title: Reloading on file changes
group: guides
description: How to automatically restart Deno scripts on file changes
---
# Reloading on file changes

Use the `watch` property to watch for file changes and restart processes automatically.

> 🧪 Unstable

When set to true, the entrypoint and all local files the entrypoint(s) statically import(s) will be watched.

```yaml
scripts:
  start:
    cmd: server.ts
    watch: true
```

Pass a string or array of strings to add additional paths to the watched files:

```yaml
scripts:
  start:
    cmd: server.ts
    watch: ./assets
    # or
    watch:
      - ./public
      - ./assets
```
