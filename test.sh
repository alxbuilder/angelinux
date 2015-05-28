#!/bin/bash
#(@) test a nanoc site below this root

while :
do
  bundle install
  nanoc compile && \
  ls -ld output/robots* && \
  ls -ld output/sitemap* ; \
  rsync -vrtplz ./.well-known/ ./output/.well-known/
  nanoc view && sleep 3
done
