#!/usr/bin/python3

# Print necessary headers.
print("Content-Type: text/html")
print()

#Using oracle 11.2
import os,sys

if 'LD_LIBRARY_PATH' not in os.environ:
    os.environ['LD_LIBRARY_PATH'] = '/u01/app/oracle/product/11.2.0/xe/lib'
    os.environ['ORACLE_SID'] = 'XE'
    os.environ['ORACLE_HOME'] = '/u01/app/oracle/product/11.2.0/xe'
    
    try:
        os.execv(sys.argv[0], sys.argv)
    except Exception as e:
        print(e, end='')
        
try:
    import cx_Oracle
    import json

    
    method = os.environ['REQUEST_METHOD']
    
    sql = os.environ['QUERY_STRING']
    sql = sql.replace("%20"," ")
    sql = sql.replace("%27","'")
    sql = sql[4:]
    
    if sql.find(';') != -1:
        sql = sql.split(';')
        if len(sql[-1]) == 0:
            sql = sql[:-1]
            
    if len(sql) == 1:
        sql = sql[0]
    
    con = cx_Oracle.connect('timmy/timmy@localhost:1521/xe')
    
    #Need to protect against sql injection in usercreation and exercise creation
    #Method use USERINPUT tag to extract user input and put in necessary spot
    #Won't have multiple queries with USER INPUT, so read user input and extract
    if 'USERINPUT' in sql:
        
        cursor = con.cursor()
        
        if method == 'GET': #GET WILL HANDLE ALL QUERIES
            
            #Extract value between the two
            val = sql.index('USERINPUT') + 10
            val = str(sql[val:-3])
            sql = str(sql[:sql.index('USERINPUT')])
            #sql contains appropriate query
            #val contains the user submitted value
            
            sql += ":x"
                
            cursor.execute(sql,{'x': val})
            rows = cursor.fetchall()
            
            rows = json.dumps(rows)

            print(rows, end='')
            
        elif method == 'POST': #POST WILL HANDLE ALL UPDATE,READ,and DELETE
            
           #Only post requests --> naming workout and making new user
           if 'insert into sessions' in sql:
            
                val = sql.index('USERINPUT') + 10
                val2 = sql.index('END')
                val = str(sql[val:val2-1])
                sql2 = str(sql[:sql.index('USERINPUT')])

                #sql contains appropriate query
                #val contains the user submitted value

                sql2 += ":x" + sql[val2-1]
                sql = sql2
                
                cursor = con.cursor()
                
                cursor.execute(sql, {'x':val})
                con.commit()

                con.commit()  
                print(f'Successfully executed {sql}', end='')
            
           elif 'insert into users' in sql:
               
                #Need to split into email and username
                ind = sql.index('USERINPUT') + 10
                ind2 = sql.index('END')
                ind3 = str(sql[ind:ind2-1])
                sql2 = str(sql[:sql.index('USERINPUT')])
                
                email = ind3[:ind3.index(', ')]
                user = ind3[ind3.index(', ')+2:]
                # #sql contains appropriate query
                # #val contains the user submitted value

                sql2 += ":x" + ", :y" + ")"
                sql = sql2
                
                cursor = con.cursor()
                
                cursor.execute(sql, {'x':email, 'y':user})
                con.commit()

                con.commit()  
                print(f'Successfully executed {sql}', end='') 
            
        
        cursor.close()
        con.close()
    else:
            
        
        if method == 'GET': #GET WILL HANDLE ALL QUERIES
            
            
            #EXAMPLES:
                #select * from exercises
            
            # If sql is a list need to run multiple commands

            cursor = con.cursor()
            
            if type(sql) is list:
            
                for query in sql:
                    
                    cursor.execute(query)
                    rows = cursor.fetchall()
                    
                    rows = json.dumps(rows)

                    print(rows)
            
            else:
                
                cursor.execute(sql)
                rows = cursor.fetchall()
                
                rows = json.dumps(rows)

                print(rows, end='')
            
        elif method == 'POST': #POST WILL HANDLE ALL UPDATE,READ,and DELETE
            
        #     #TODO: ROBUST ERROR CHECKING --> verify no select
        #     #EXAMPLES:
        #         #insert into general_muscles(muscle_group, general_id) values ('Hello',11)
        #         #update general_muscles set muscle_group = 'Hell', general_id = 11 where muscle_group = 'Hello'
        #         #delete from general_muscles where muscle_group = 'Hello'
            
            
        #     #Need to extract all values from between ()
            cursor = con.cursor()
            
            if type(sql) is list:
            
                for query in sql:

                    cursor.execute(query)
    
            else:
                cursor.execute(sql)
                con.commit()

            con.commit()  
            print(f'Successfully executed {sql}', end='')
            
        
        cursor.close()
        con.close()
            

except Exception as e:
    print(e)

