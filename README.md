# @ctheory/promisify [![npm (scoped)](https://img.shields.io/npm/v/@ctheory/promisify.svg)](https://www.npmjs.com/package/@ctheory/promisify) [![npm type definitions](https://img.shields.io/npm/types/@ctheory/promisify.svg)](https://github.com/common-theory/promisify)

A simple TS typed function for promisifying callback based apis.

## Usage

```ts
import { promisify } from '@ctheory/promisify';

const callbackFunction = (arg1, arg2, callback) => {
  callback();
};

const promisedFunction = promisify(callbackFunction);
```
