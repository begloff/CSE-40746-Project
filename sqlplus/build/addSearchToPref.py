#Strategy: need to open search.csv and exerciseswithPref2
import csv



a = open('exercisesWithPref4.csv', 'r')
b = open('searchs.csv', 'r')

two = csv.reader(b,delimiter=',')

for row in two:
    line = ''
    num = row[1][1:]
    line = a.readline()
    line = line + '~' + num
    print(line)
    break

# for row in reader1:
#     print(row)
#     break



