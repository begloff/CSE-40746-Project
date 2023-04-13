#!/usr/bin/env python3

import requests
import re
from time import sleep
import random

headers={'User-Agent':	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15'}



oCSV = open("exercises.csv", "r")

searches = dict()
count = 1
with open("searchs.csv", "a") as f:
    while line := oCSV.readline().strip():
        if count > 322:
            sleep(random.randint(1,3))
            workout = line.split('~')[2].split(' ')
            workout_s = '+'.join(workout)
            search = requests.get(f"https://www.google.com/search?q={workout_s}", headers=headers)

            try:
                num = int(re.search("About .{1,15} results", search.text)[0].split(' ')[1].replace(',', ''))
                searches[' '.join(workout)] = num
                f.write("%s, %s\n"%(' '.join(workout),num))
                print('money yo')
            except TypeError:
                print("we're fucked")
            print(count)
        count += 1