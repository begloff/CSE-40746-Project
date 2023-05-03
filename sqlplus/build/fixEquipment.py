import csv

f = open('finalExercises2.csv',"r")
a = open('finalExercises3.csv', 'w')

r = csv.reader(f, delimiter='~')

for line in r:
    #Check line[3] for errors

    f = line[6]
    
    if f == '4Pull' or f == '4Pull ':
        line[6] = 'Pull'

    if f== 'Pull & Push' or f == 'Pull & Push ':
        line[6] = 'Push & Pull'
        
        
    x = '~'.join(line)
    a.write(x+'\n')
