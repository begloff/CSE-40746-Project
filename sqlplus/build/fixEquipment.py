import csv

f = open('exercisesToInsert.csv',"r")
a = open('exercisesToInsert2.csv', 'w')

r = csv.reader(f, delimiter='~')

for line in r:
    #Check line[3] for errors
    e = line[3]
    u = line[4]
    f = line[6]
    
    if f == 'Push &amp; Pull' or f == 'Push &amp; Pull ':
        line[6] = 'Push & Pull'
        
    if line[3] == '':
        line[3] = 'None'
    if line[4] == '':
        line[4] = 'None'
    if line[5] == '':
        line[5] = 'None'
    if line[6] == '':
        line[6] = 'None'
    
    if line[4] == 'Basic or Auxiliary' or line[4] == 'Basic or Auxiliary ':
        line[4] = 'Auxiliary or Basic'
    
    if e == 'Assisted ':
        line[3] = 'Assisted'
        print('CHANGE')
    
    if e == 'Barbell ':
        line[3] = 'Barbell'
        print('CHANGE')
        
    if e == 'Body Weight ' or e == 'Bodyweight' or e == 'Bodyweight ':
        line[3] = 'Body Weight'
        print('CHANGE')
        
    if e == 'Cable ':
        line[3] = 'Cable'
        print('CHANGE')
        
    if e == 'Cable (' or e == 'Cable ( ':
        line[3] = 'Cable (pull side)'
        
    if e == 'Dumbbell ':
        line[3] = 'Dumbbell'
        print('CHANGE')
        
    if e == 'Lever ':
        line[3] = 'Lever'
        
    if e == 'Lever (plate loaded) ':
        line[3] = 'Lever (plate loaded)'
    
    if e == 'Lever (selectorized)':
        line[3] = 'Lever (selectorized)'
         
    if e == 'Smith ':
        line[3] = 'Smith'
        
    if e == 'Stretch ':
        line[3] = 'Stretch'
        
    if e == 'Suspended ' :
        line[3] = 'Suspended'
        
    if e == 'Weighted ':
        line[3] = 'Weighted'
        
    x = '~'.join(line)
    a.write(x+'\n')
