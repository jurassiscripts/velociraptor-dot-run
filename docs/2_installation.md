---
title: Installation
group: getting-started
---
# Installation

In order to install Velociraptor, you'll need a recent version of <a href="https://deno.land" target="_blank">Deno</a>.

## Installing from 🦕 [deno.land](https://deno.land/x/velociraptor)

```shell
$ deno install -qAn vr https://deno.land/x/velociraptor@1.0.0-beta.18/cli.ts
```

## Installing from 🥚 [nest.land](https://nest.land/package/velociraptor)

```shell
$ deno install -qAn vr https://x.nest.land/velociraptor@1.0.0-beta.18/cli.ts
```

## Installing specific versions

To install a specific version, provide a version tag after the `@`:

```shell
$ deno install -qAn vr https://deno.land/x/velociraptor@<VERSION>/cli.ts
```

If you're updating/overwriting an existing installation add the `-f` flag.

## Usage without installing

To use Velociraptor without installing it run:

```shell
$ deno run -qA https://code.velociraptor.run <PARAMS>
```

> ℹ️️ Some of vr's features won't work this way, see [Known limitations](/docs/known-limitations/#custom-executable-names).

## Permissions

Here's an overview of how vr uses permissions:

|Permission|Description|
|:---|:---|
|`env`|Access the environment variables to control behaviors such as the log level or git hooks deactivation|
|`net`|Check for updates and retrieve version tags|
|`read`|Find script configuration files and git hooks|
|`run`|Run your scripts in separate processes|
|`write`|Write git hooks (future use: write log files on failures)|

The recommended installation script includes the `-A/--allow-all` flag (which grants all permissions) to support future
version installs with the `upgrade` command and in order to allow you to write arbitrary TypeScript configuration files
(which inherit vr's permissions when imported).

> ⚠️ This means that your `.ts` config files are granted all permissions.
