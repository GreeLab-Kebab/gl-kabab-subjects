#!/bin/bash

while IFS= read line; do
  counter=0
  chromium-browser $line  --args  --auto-open-devtools-for-tabs
  sleep 5
  xdotool mousemove 1223 173  click 1
  sleep 2
  xdotool mousemove 1540 219 click 1
  sleep 8
  xdotool mousemove 303 68 click 1
  pkill -x chromium-browser
done < "$1"
