#! /bin/bash
node node_modules/typescript/bin/tsc.js --watch -m commonjs -t es5 --emitDecoratorMetadata js/todo.ts
