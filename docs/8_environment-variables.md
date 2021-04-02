---
title: Environment variables
group: guides
---
# Environment variables

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

`envFile` can contain the path to a single file or a list of paths. Environment variables defined in `env` will override
the ones defined with `envFile`.

## Dotenv file format

The usual dotenv file format is supported:

```shell
AWS_S3_TOKEN=d84a83539134f28f412c652b09f9f98eff96c9a
SECRET_KEY=7c6c72d959416d5aa368a409362ec6e2ac90d7f
MONGO_URI=mongodb://127.0.0.1:27017
PORT=3001
```

as well as exports, quotes and comments.

```shell
export AWS_S3_TOKEN="d84a83539134f28f412c652b09f9f98eff96c9a"
export SECRET_KEY='7c6c72d959416d5aa368a409362ec6e2ac90d7f'
export MONGO_URI=mongodb://127.0.0.1:27017
# export PORT=3001
export PORT=3002
```
