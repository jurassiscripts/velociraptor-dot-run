---
title: Reloading on file changes
group: guides
description: How to automatically restart Deno scripts on file changes
---
# Reloading on file changes

Use the `watch` property to watch for file changes and restart processes automatically.

> ℹ️ Only local files from entry point module graph are watched

```yaml
scripts:
  start:
    cmd: server.ts
    watch: true
```
