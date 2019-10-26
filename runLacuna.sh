#!/bin/bash

rm -r ./LacunaWebPages/*
while IFS= read line; do
  DIR=$(dirname "${line}")
  FILENAME=$(basename "${line}")
  node ./lacuna 100-unzipped-webpages/$DIR -e $FILENAME -d lacunaWebPages/$DIR/0 -a dynamic tajs -o 0
  node ./lacuna 100-unzipped-webpages/$DIR -e $FILENAME  -d lacunaWebPages/$DIR/1 -a dynamic tajs -o 1
  node ./lacuna 100-unzipped-webpages/$DIR -e $FILENAME  -d lacunaWebPages/$DIR/2 -a dynamic tajs -o 2
  node ./lacuna 100-unzipped-webpages/$DIR -e $FILENAME  -d lacunaWebPages/$DIR/3 -a dynamic tajs -o 3


done < "$1"
