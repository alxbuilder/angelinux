#!/bin/bash
#(@) Shove stuff up to github
touch README.md
git init
git add content layouts lib Rules test.sh nanoc.yaml README.md
git commit -m "CareerZoo Version"
git remote add origin git@github.com:alxbuilder/angelinux.git
git push -u origin master
