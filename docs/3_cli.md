---
title: CLI
group: getting-started
description: Velociraptor CLI commands explained
---
# CLI

Here's an overview of `vr`'s main commands (run `vr --help` or `vr <command> --help` to get help in the CLI).

## Listing scripts

Run

```sh
$ vr
```

to see a list of available scripts.

## Running scripts

To run a script, use the `run` subcommand

```sh
$ vr run <SCRIPT> [ADDITIONAL ARGS]...
```

or, more concisely

```sh
$ vr [SCRIPT] [ADDITIONAL ARGS]...
```

|Arg or option|Description|
|:---|:---|
|`SCRIPT`|The identifier of the script to run.|
|`ADDITIONAL ARGS`|Any other argument, passed to the script. Unlike `npm run`, the `--` separator is not needed.|

For example, run

```sh
$ vr start
# or
$ vr run start
```

to execute the `start` script.

> ℹ️ If you enabled [shell completions](#shell-completions), trigger the autocomplete on one of this commands to get the available scripts as suggestions.

## Exporting scripts

If you want to use velociraptor to manage your scripts, but you want to be able to execute them in environments where
you can't (or don't want to) install vr, the `export` subcommand may be of help: it allows you to export one or more
scripts as standalone executable shell files together with their env variables, Deno cli options etc.:

```sh
$ vr export [SCRIPTS]...
```

|Arg or option|Description|
|:---|:---|
|`SCRIPTS`|A space-separated list of scripts to export. If omitted, all the declared scripts are exported.|
|`-o, --out-dir`|The directory where the scripts will be exported (default: `bin`).|

For example, run

```sh
$ vr export start
```

to export the `start` script. Now you can execute it by running

```sh
$ ./bin/start [ARGS]...
```

> Scripts exporting currently only supports `sh`.

## Shell scripting

Like in `npm` scripts, vr commands are executed inside a shell. On Unix-like systems the shell is determined by the
`SHELL` env variable (with `sh` as fallback); on Windows `PowerShell` is used by default (see
[Cmd.exe and quotes](/docs/known-limitations#cmd.exe-and-quotes)) with the `ComSpec` env variable and `cmd.exe` as
fallback values. To customize the shell without changing your default shell env variables you can use the `VR_SHELL`
variable (a full path is required).

The shell requirements are pretty much the same as [node's](https://nodejs.org/api/child_process.html#child_process_shell_requirements).

## Current working directory

Velociraptor searches for script files up the folder tree starting from the directory where the `vr` command was launched. Scripts are run from the directory where the script file is, independently of the initial location.

## Shell completions

To enable shell tab-completion for velociraptor commands, add the corresponding line to your shell's config:

- zsh: `~/.zshrc`

   ```sh
   source <(vr completions zsh)
   ```

- bash: `~/.bashrc`

   ```sh
   source <(vr completions bash)
   ```

- fish: `~/.config/fish/config.fish`

   ```fish
   source (vr completions fish | psub)
   ```
