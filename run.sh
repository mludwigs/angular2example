#! /bin/bash

while getopts ":i" opt; do
	case $opt in
		i)
			npm install -g http-server
			;;
	esac
done			

http-server