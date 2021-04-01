---
title: Environment variables
group: guides
---
# Environment variables

`envFile` can be a single file or a list of files. Environment variables define with `env` will override environment
variables defined with `envFile`.

The format of the `envFile` looks like this.

```shell
AWS_S3_TOKEN=d84a83539134f28f412c652b09f9f98eff96c9a
SECRET_KEY=7c6c72d959416d5aa368a409362ec6e2ac90d7f
MONGO_URI=mongodb://127.0.0.1:27017
PORT=3001
```

Exports, quotes and comments are also supported.

```shell
export AWS_S3_TOKEN="d84a83539134f28f412c652b09f9f98eff96c9a"
export SECRET_KEY='7c6c72d959416d5aa368a409362ec6e2ac90d7f'
export MONGO_URI=mongodb://127.0.0.1:27017
# export PORT=3001
export PORT=3002
```
