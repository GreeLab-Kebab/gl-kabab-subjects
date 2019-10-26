#!/bin/bash

cd 100-unzipped-webpages
for file in *
do
    echo $file >> WebNames.txt
done
mv WebNames.txt ..
