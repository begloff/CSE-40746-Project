#&#34; "
#&#39; '

import csv

f = open('finalExercises.csv',"r")
a = open('finalExercises2.csv', 'w')

r = csv.reader(f, delimiter='~')

for line in r:
    #Check line[3] for errors
    # print(line[11])
    b = int(line[11])
    if b > 10:
        line[11] = str(10)
    if b < 1:
        line[11] = str(1)
        
        
    x = '~'.join(line)
    a.write(x+'\n')
