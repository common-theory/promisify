# @ctheory/promisify [![npm (scoped)](https://img.shields.io/npm/v/@ctheory/promisify.svg)](https://www.npmjs.com/package/@ctheory/promisify)

A simple TS typed function for promisifying callback based apis.

## Usage

```ts
import { promisify } from '@ctheory/promisify';

const callbackFunction = (arg1, arg2, callback) => {
  callback();
};

const promisedFunction = promisify(callbackFunction);
```
