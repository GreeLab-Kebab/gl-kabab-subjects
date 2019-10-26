#!/bin/bash
cd ./100-unzipped-webpages/
for filename in *; do
  echo $filename
  find "$filename/$filename" -name '*.html' >> tmp
done
