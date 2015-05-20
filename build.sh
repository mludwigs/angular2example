#! /bin/bash
while getopts ":i" opt; do
	case $opt in
		i)
			npm install -g typescript@^1.5.0-beta
			;;
	esac
done

tsc --watch -m commonjs -t es5 --emitDecoratorMetadata js/todo.ts
