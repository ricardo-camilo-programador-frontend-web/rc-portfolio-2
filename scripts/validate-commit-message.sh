#!/usr/bin/env sh
set -eu

message="${1-}"
if [ -n "$message" ] && [ -f "$message" ]; then
  message=$(sed -n '1p' "$message")
elif [ -z "$message" ]; then
  IFS= read -r message || true
fi

pattern='^:[a-z_]+: [a-z]+([a-z-]*)?(\([a-zA-Z0-9/_.-]+\))?: .+'

if ! printf '%s\n' "$message" | grep -Eq "$pattern"; then
  printf 'Invalid commit message: %s\n' "$message" >&2
  printf 'Expected: :emoji: type(scope): description or :emoji: type: description\n' >&2
  printf 'Example: :bug: fix(77): correct commit lint validation\n' >&2
  exit 1
fi
