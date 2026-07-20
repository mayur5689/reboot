#!/bin/sh
set -e

repo_root="$(git rev-parse --show-toplevel 2>/dev/null)" || {
  echo "install-githooks: not inside a git repository" >&2
  exit 1
}

hooks_src="$repo_root/.githooks"
hooks_dst="$repo_root/.git/hooks"

if [ ! -d "$hooks_src" ]; then
  echo "install-githooks: missing $hooks_src" >&2
  exit 1
fi

mkdir -p "$hooks_dst"

for hook in "$hooks_src"/*; do
  [ -f "$hook" ] || continue
  name="$(basename "$hook")"
  cp "$hook" "$hooks_dst/$name"
  chmod +x "$hooks_dst/$name"
  echo "Installed git hook: $name"
done
