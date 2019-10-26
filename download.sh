#!/bin/bash

while IFS= read line; do
  chromium-browser $line  --args  --auto-open-devtools-for-tabs
done < "$1"
