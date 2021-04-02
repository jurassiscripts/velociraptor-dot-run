---
title: Known limitations
group: help-support
---
# Known limitations

## Cmd.exe and quotes

If you tried to use `cmd.exe` as vr's shell you've probably noticed some weird behaviors if commands contain quotes, ie:

```yaml
scripts:
  test: deno run "a filename with spaces.ts"
```

This is caused by how Rust's `std::Command` (used by `Deno.run()`) escapes cli arguments, see
[here](https://github.com/rust-lang/rust/issues/29494). For this reason the default shell on Windows is Powershell.

## Custom executable names

`deno install` allows you to choose a custom executable name thought the `-n/--name` option. However, some of vr's
features such as git hooks and the `upgrade` command won't work correctly with a name different from `vr`.
This will hopefully be possible when Deno adds a way for CLI authors to retrieve the installed name, see
[here](https://github.com/denoland/deno/issues/5725).
