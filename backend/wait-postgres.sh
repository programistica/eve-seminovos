#!/bin/sh

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

# until nc -z "$host" "$port"; do
#   echo "Waiting for postgresql at $host:$port..."
#   sleep 1
# done

echo "PostgreSQL started"
exec $cmd
