#!/usr/bin/env python3

import requests
import re
from time import sleep
import random
from math import ceil

searches = dict()

with open("searchs.csv", "r") as f:
    while line := f.readline().strip():
        try:
            workout, n = line.split(', ')
            searches[workout] = int(n)
        except ValueError:
            workout, w2, n = line.split(', ')
            searches[f"{workout}{w2}"] = int(n)

sortedSearches = sorted(searches, key=lambda x: searches[x], reverse=True)

for n, key in enumerate(sortedSearches):
    searches[key] = ceil(n/150)
    print(searches[key])

with open("exercises.csv", "r") as f:
    with open("exercisesWithPref2.csv", "w") as g:
        while line := f.readline().strip():
            try:
                g.write(f"{line}~{searches[line.split('~')[2]]}\n")
            except:
                g.write(f"{line}~5")