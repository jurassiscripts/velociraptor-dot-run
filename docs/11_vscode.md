---
title: VSCode
group: ides
description: Velociraptor VSCode Integration
---
# VSCode integration

[Velociraptor support for VSCode](https://marketplace.visualstudio.com/items?itemName=umbo.vscode-velociraptor) adds
code assistance for script configuration files (both `yaml` and `json`).

![VSCode code assistance for Velociraptor](/images/vscode.png)

## Code assistance in `.ts` config files

To get code assistance in TypeScript config files, add a type to the default export:

```typescript
import { ScriptsConfiguration } from "https://deno.land/x/velociraptor@1.5.0/mod.ts";

export default <ScriptsConfiguration>{
  scripts: {
    start: "deno run --allow-net server.ts",
    test: "deno test --allow-net server_test.ts",
  },
};
```
