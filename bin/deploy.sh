#!/bin/bash
ftp -n<<!
open olege.com
user cluber cluber
binary
hash
cd /home/data
lcd /home/databackup
prompt
mput *
close
bye
