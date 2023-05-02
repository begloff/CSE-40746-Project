import requests
import re
from bs4 import BeautifulSoup
import csv

x = requests.get('https://exrx.net/Lists/Directory')
html = x.text

categories = re.findall(r"Other.*<ul>(.*?)</ul>", html, re.MULTILINE | re.DOTALL)[0]

links = re.findall(r"<a href=\"(.*?)\">", categories)

print(links)

categories = re.findall(r"<a href.*>(.*?)</a>", categories)

categories[2] = 'Cardio & Conditioning'



#46 -> Olympic
#47 --> Plyometrics
#48 -> Cardio & Conditioning
#49 -> Kettlebell

counter = 2849
genid = 11

a = open('moreExercises.csv','a')

#General ID, Detail ID, Name, Equipment, Utility, Mechanics, Muscle Force, method, preparation, execution, comments, picture

for entry in range(len(links)):

    if entry == 0: #Done with Olympic, still need plyometrics, cardio & conditioning, and kettlebell
        continue
    #Strategy --> extract all links and go from there 

        x = requests.get(f'https://exrx.net/Lists/{links[entry]}')
        html = x.text

        exercises = re.findall(r"<a href=\"(.*?)\">.*</a>", html)
        if entry == 0:
            exercises = exercises[3:51]

        exercises = [exercise.replace('..', 'https://exrx.net') for exercise in exercises]

        for link in exercises:
            y = requests.get(link)
            html = y.text

            #Extract exercise name: <h1 class="page-title">(.*?)</h1>
            #Equipment for Most of these exercises is barbell
            #Utility: <strong>Utility(.*?)</tr> multiline and dotall
            # Mechanics: <strong>Mechanics(.*?)</tr>
            # Force: <strong>Force(.*?)</tr>

            #Still need preparation, execution, comments
            soup = BeautifulSoup(html, 'html.parser')
            name = soup.find('title').text.replace("ExRx.net : ","")

            genid = str(11)

            muscleid = str(counter)
            counter += 1
            
            equipment = 'Barbell'
            
            u = re.findall(r"<strong>Utility(.*?)</tr>", html, re.MULTILINE | re.DOTALL)
            m = re.findall(r"<strong>Mechanics(.*?)</tr>", html, re.MULTILINE | re.DOTALL)
            f = re.findall(r"<strong>Force(.*?)</tr>", html, re.MULTILINE | re.DOTALL)

            if u:
                u = re.findall(r">(.*?)<", u[0], re.MULTILINE | re.DOTALL)
                u = ''.join(u).replace('/n','') #UTILITY
            else:
                u = ""
            
            if m:
                m = re.findall(r">(.*?)<", m[0], re.MULTILINE | re.DOTALL)
                m = ''.join(m).replace('/n','') #MECHANICS
            else:
                m = ""
                
            if f:
                f = re.findall(r">(.*?)<", f[0], re.MULTILINE | re.DOTALL)
                f = ''.join(f).replace('/n','') #FORCE
                f = f.replace('&amp;', '&')
            else:
                f =""
            
            p = re.findall(r"<p><strong>Preparation</strong></p>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
            e = re.findall(r"<p><strong>Execution \([A-za-z]*\)</strong></p>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
            elabels = re.findall(r"<strong>Execution \((.*?)\)</strong>", html)
            c = re.findall(r"<h2>Comments</h2>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
            
            if p:
                p = re.sub(r"(<[^>]*>)","",p[0], re.MULTILINE | re.DOTALL).replace("\n","") #PREPARATION
            else:
                p = ""
                
            if e:
                if len(elabels) == len(e):
                    #Combine
                    temp = ''
                    for index in range(len(elabels)):
                        temp += elabels[index] + ': ' + e[index] + " "
                    e[0] = temp
                e = re.sub(r"(<[^>]*>)","",e[0], re.MULTILINE | re.DOTALL).replace("\n","") #EXECUTION
            else:
                e = ""
                
            if c:
                c = re.sub(r"(<[^>]*>)","",c[0], re.MULTILINE | re.DOTALL).replace("\n","") #COMMENTS
            else:
                c = ""
            
            temp = name.replace(" ", "+")
            img = requests.get(f'https://www.google.com/search?q={temp}&tbm=isch&ved=2ahUKEwj2_9PYppv-AhV_EGIAHUxUDAgQ2-cCegQIABAA&oq={temp}&gs_lcp=CgNpbWcQAzoKCAAQigUQsQMQQzoHCAAQigUQQzoFCAAQgAQ6CAgAEIAEELEDUPQJWP5fYNliaABwAHgAgAFAiAG2AZIBATOYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAMABAQ&sclient=img&ei=euYxZPbaJ_-giLMPzKixQA&bih=929&biw=1920')
            if img:
                img = re.findall(r"<img[^>]*src=\"(https:[^>]*?)\"/>", img.text, re.MULTILINE | re.DOTALL)[0] #IMAGE
            else:
                img = ""
            
            genid = genid.replace("\n","")
            muscleid = muscleid.replace("\n","")
            name = name.replace("\n","")
            equipment = equipment.replace("\n","") 
            u = u.replace("\n","")
            m = m.replace("\n","")
            f = f.replace("\n","")
            p = p.replace("\n","")
            e = e.replace("\n","")
            c = c.replace("\n","")
            img = img.replace("\n","")

            if 'Dumbbell' in name:
                equipment = 'Dumbbell'
            elif 'Kettlebell' in name:
                equipment = 'Kettlebell'
            print(f'{genid}\n')
            print(f'{muscleid}\n')
            print(f'{name}\n')
            print(f'{equipment}\n')
            print(f'{u}\n')
            print(f'{m}\n')
            print(f'{f}\n')
            print(f'{p}\n')
            print(f'{e}\n')
            print(f'{c}\n')
            print(f'{img}\n')
            # print(html)
            
            csvline = f'{muscleid}~{genid}~{name}~{equipment}~{u}~{m}~{f}~{p}~{e}~{c}~{img}\n'
            a.write(csvline)
            print(counter)
    if entry == 1:
        continue
        x = requests.get(f'https://exrx.net/Lists/{links[entry]}')
        html = x.text
        
        equipment = re.findall(r"<h3>.*</a>(.*?)</h3>", html)
        
        links = {}
        
        for index in range(len(equipment) - 1):
            regex = re.escape(equipment[index]) + r"(.*?)" + re.escape(equipment[index+1]) 
            b = re.findall(regex, html, re.MULTILINE | re.DOTALL)
            links[equipment[index]] =  b[0]

        regex = re.escape(equipment[-1]) + r"(.*?)" + re.escape("Other Exercises")
        links[equipment[-1]] = re.findall(regex, html, re.MULTILINE | re.DOTALL)[0]

        links2 = {}
        for link in links:
            links2[link] = re.findall(r"<a href=\"(.*?)\">.*</a>",links[link])

        for link in links2:
            links2[link] = [exercise.replace('..', 'https://exrx.net') for exercise in links2[link]]

        for link in links2:
            for addr in links2[link]:
                y = requests.get(addr)
                html = y.text

                soup = BeautifulSoup(html, 'html.parser')
                name = soup.find('title').text.replace("ExRx.net : ","")

                genid = str(11)

                muscleid = str(counter)
                counter += 1
                
                equipment = link
                
                u = re.findall(r"<strong>Utility(.*?)</tr>", html, re.MULTILINE | re.DOTALL)
                m = re.findall(r"<strong>Mechanics(.*?)</tr>", html, re.MULTILINE | re.DOTALL)
                f = re.findall(r"<strong>Force(.*?)</tr>", html, re.MULTILINE | re.DOTALL)

                if u:
                    u = re.findall(r">(.*?)<", u[0], re.MULTILINE | re.DOTALL)
                    u = ''.join(u).replace('/n','') #UTILITY
                else:
                    u = ""
                
                if m:
                    m = re.findall(r">(.*?)<", m[0], re.MULTILINE | re.DOTALL)
                    m = ''.join(m).replace('/n','') #MECHANICS
                else:
                    m = ""
                    
                if f:
                    f = re.findall(r">(.*?)<", f[0], re.MULTILINE | re.DOTALL)
                    f = ''.join(f).replace('/n','') #FORCE
                    f = f.replace('&amp;', '&')
                else:
                    f =""
                
                p = re.findall(r"<p><strong>Preparation</strong></p>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                e = re.findall(r"<p><strong>Execution</strong></p>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                c = re.findall(r"<h2>Comments</h2>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                
                if p:
                    p = re.sub(r"(<[^>]*>)","",p[0], re.MULTILINE | re.DOTALL).replace("\n","") #PREPARATION
                else:
                    p = ""
                    
                if e:
                    e = re.sub(r"(<[^>]*>)","",e[0], re.MULTILINE | re.DOTALL).replace("\n","") #EXECUTION
                else:
                    e = ""
                    
                if c:
                    c = re.sub(r"(<[^>]*>)","",c[0], re.MULTILINE | re.DOTALL).replace("\n","") #COMMENTS
                else:
                    c = ""
                
                temp = name.replace(" ", "+")
                img = requests.get(f'https://www.google.com/search?q={temp}&tbm=isch&ved=2ahUKEwj2_9PYppv-AhV_EGIAHUxUDAgQ2-cCegQIABAA&oq={temp}&gs_lcp=CgNpbWcQAzoKCAAQigUQsQMQQzoHCAAQigUQQzoFCAAQgAQ6CAgAEIAEELEDUPQJWP5fYNliaABwAHgAgAFAiAG2AZIBATOYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAMABAQ&sclient=img&ei=euYxZPbaJ_-giLMPzKixQA&bih=929&biw=1920')
                if img:
                    img = re.findall(r"<img[^>]*src=\"(https:[^>]*?)\"/>", img.text, re.MULTILINE | re.DOTALL)[0] #IMAGE
                else:
                    img = ""
                
                genid = genid.replace("\n","")
                muscleid = muscleid.replace("\n","")
                name = name.replace("\n","")
                equipment = equipment.replace("\n","") 
                u = u.replace("\n","")
                m = m.replace("\n","")
                f = f.replace("\n","")
                p = p.replace("\n","")
                e = e.replace("\n","")
                c = c.replace("\n","")
                img = img.replace("\n","")

                print(f'{genid}\n')
                print(f'{muscleid}\n')
                print(f'{name}\n')
                print(f'{equipment}\n')
                print(f'{u}\n')
                print(f'{m}\n')
                print(f'{f}\n')
                print(f'{p}\n')
                print(f'{e}\n')
                print(f'{c}\n')
                print(f'{img}\n')
                # print(html)
                
                csvline = f'{muscleid}~{genid}~{name}~{equipment}~{u}~{m}~{f}~{p}~{e}~{c}~{img}\n'
                a.write(csvline)
                print(counter)
        
        #Can now visit each link and do according things
    if entry == 2:
        #Cardio and Calisthenics
        print(links)
        x = requests.get(f'https://exrx.net/Lists/{links[entry]}')
        html = x.text
        
        equipment = re.findall(r"<h3>(.*?)</h3>", html)
        
        equipment[5] = 'Machines'
        equipment = equipment[:-1]

        links = {}
        
        for index in range(len(equipment) - 1):
            regex = re.escape(equipment[index]) + r"(.*?)" + re.escape(equipment[index+1]) 
            b = re.findall(regex, html, re.MULTILINE | re.DOTALL)
            links[equipment[index]] =  b[0]

        regex = re.escape(equipment[-1]) + r"(.*?)" + re.escape("Other Exercises")
        links[equipment[-1]] = re.findall(regex, html, re.MULTILINE | re.DOTALL)[0]

        links2 = {}
        for link in links:
            links2[link] = re.findall(r"<a href=\"(.*?)\">.*</a>",links[link])

        for link in links2:
            links2[link] = [exercise.replace('..', 'https://exrx.net') for exercise in links2[link]]


        links2['Climbing Machine'] = links2['Machines'][0:3]
        links2['Cycling Machine'] = links2['Machines'][3:9]
        links2['Elliptical'] = links2['Machines'][9:13]
        links2['Rowing Machine'] = links2['Machines'][13:17]
        links2['Ski Machine'] = links2['Machines'][17:20]
        links2['Step Machine'] = links2['Machines'][20:24]
        links2['Treadmill'] = links2['Machines'][24:28]
        links2['Other Machines'] = links2['Machines'][28:32]

        del links2['Machines']


        for link in links2:
            for addr in links2[link]:
                y = requests.get(addr)
                html = y.text

                soup = BeautifulSoup(html, 'html.parser')
                name = soup.find('title').text.replace("ExRx.net : ","")

                genid = str(11)

                muscleid = str(counter)
                counter += 1
                
                equipment = link
                
                u = re.findall(r"<strong>Bearing(.*?)</tr>", html, re.MULTILINE | re.DOTALL)
                m = re.findall(r"<strong>Mechanics(.*?)</tr>", html, re.MULTILINE | re.DOTALL)
                f = re.findall(r"<strong>Impact(.*?)</tr>", html, re.MULTILINE | re.DOTALL)

                if u:
                    u = re.findall(r">(.*?)<", u[0], re.MULTILINE | re.DOTALL)
                    u = ''.join(u).replace('/n','') #UTILITY
                    u = 'Bearing ' + u + ' - Cardio'
                else:
                    u = ""
                
                if m:
                    m = re.findall(r">(.*?)<", m[0], re.MULTILINE | re.DOTALL)
                    m = ''.join(m).replace('/n','') #MECHANICS
                else:
                    m = ""
                    
                if f:
                    f = re.findall(r">(.*?)<", f[0], re.MULTILINE | re.DOTALL)
                    f = ''.join(f).replace('/n','') #FORCE
                    f = f.replace('&amp;', '&')
                    f = f+" Impact"
                else:
                    f =""
                
                p = re.findall(r"<p><strong>Preparation</strong></p>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                e = re.findall(r"<p><strong>Execution</strong></p>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                c = re.findall(r"<h2>Comments</h2>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                
                if p:
                    p = re.sub(r"(<[^>]*>)","",p[0], re.MULTILINE | re.DOTALL).replace("\n","") #PREPARATION
                else:
                    p = ""
                    
                if e:
                    e = re.sub(r"(<[^>]*>)","",e[0], re.MULTILINE | re.DOTALL).replace("\n","") #EXECUTION
                else:
                    e = ""
                    
                if c:
                    c = re.sub(r"(<[^>]*>)","",c[0], re.MULTILINE | re.DOTALL).replace("\n","") #COMMENTS
                else:
                    c = ""
                
                temp = name.replace(" ", "+")
                img = requests.get(f'https://www.google.com/search?q={temp}&tbm=isch&ved=2ahUKEwj2_9PYppv-AhV_EGIAHUxUDAgQ2-cCegQIABAA&oq={temp}&gs_lcp=CgNpbWcQAzoKCAAQigUQsQMQQzoHCAAQigUQQzoFCAAQgAQ6CAgAEIAEELEDUPQJWP5fYNliaABwAHgAgAFAiAG2AZIBATOYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAMABAQ&sclient=img&ei=euYxZPbaJ_-giLMPzKixQA&bih=929&biw=1920')
                if img:
                    img = re.findall(r"<img[^>]*src=\"(https:[^>]*?)\"/>", img.text, re.MULTILINE | re.DOTALL)[0] #IMAGE
                else:
                    img = ""
                
                genid = genid.replace("\n","")
                muscleid = muscleid.replace("\n","")
                name = name.replace("\n","")
                equipment = equipment.replace("\n","") 
                u = u.replace("\n","")
                m = m.replace("\n","")
                f = f.replace("\n","")
                p = p.replace("\n","")
                e = e.replace("\n","")
                c = c.replace("\n","")
                img = img.replace("\n","")

                print(f'{genid}\n')
                print(f'{muscleid}\n')
                print(f'{name}\n')
                print(f'{equipment}\n')
                print(f'{u}\n')
                print(f'{m}\n')
                print(f'{f}\n')
                print(f'{p}\n')
                print(f'{e}\n')
                print(f'{c}\n')
                print(f'{img}\n')
                csvline = f'{muscleid}~{genid}~{name}~{equipment}~{u}~{m}~{f}~{p}~{e}~{c}~{img}\n'
                a.write(csvline)
                print(counter)

    if entry == 3:
        x = requests.get(f'https://exrx.net/Lists/{links[entry]}')
        html = x.text
        
        equipment = re.findall(r"<h3>(.*?)</h3>", html)
        equipment = equipment[:-1]
        
        links = {}
        
        for index in range(len(equipment) - 1):
            regex = re.escape(equipment[index]) + r"(.*?)" + re.escape(equipment[index+1]) 
            b = re.findall(regex, html, re.MULTILINE | re.DOTALL)
            links[equipment[index]] =  b[0]

        regex = re.escape(equipment[-1]) + r"(.*?)" + re.escape("Other Exercises")
        links[equipment[-1]] = re.findall(regex, html, re.MULTILINE | re.DOTALL)[0]

        # print(links)

        links2 = {}
        for link in links:
            links2[link] = re.findall(r"href=\"(.*?)\">",links[link])

        for link in links2:
            links2[link] = [exercise.replace('..', 'https://exrx.net') for exercise in links2[link]]

        for link in links2:
            for addr in links2[link]:
                y = requests.get(addr)
                html = y.text

                soup = BeautifulSoup(html, 'html.parser')
                name = soup.find('title').text.replace("ExRx.net : ","")

                genid = str(11)

                muscleid = str(counter)
                counter += 1
                
                equipment = link
                
                u = re.findall(r"<strong>Utility(.*?)</tr>", html, re.MULTILINE | re.DOTALL)
                m = re.findall(r"<strong>Mechanics(.*?)</tr>", html, re.MULTILINE | re.DOTALL)
                f = re.findall(r"<strong>Force(.*?)</tr>", html, re.MULTILINE | re.DOTALL)

                if u:
                    u = re.findall(r">(.*?)<", u[0], re.MULTILINE | re.DOTALL)
                    u = ''.join(u).replace('/n','') #UTILITY
                else:
                    u = ""
                
                if m:
                    m = re.findall(r">(.*?)<", m[0], re.MULTILINE | re.DOTALL)
                    m = ''.join(m).replace('/n','') #MECHANICS
                else:
                    m = ""
                    
                if f:
                    f = re.findall(r">(.*?)<", f[0], re.MULTILINE | re.DOTALL)
                    f = ''.join(f).replace('/n','') #FORCE
                    f = f.replace('&amp;', '&')
                else:
                    f =""
                
                p = re.findall(r"<p><strong>Preparation</strong></p>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                e = re.findall(r"<p><strong>Execution</strong></p>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                c = re.findall(r"<h2>Comments</h2>(.*?)</p>", html, re.MULTILINE | re.DOTALL)
                
                if p:
                    p = re.sub(r"(<[^>]*>)","",p[0], re.MULTILINE | re.DOTALL).replace("\n","") #PREPARATION
                else:
                    p = ""
                    
                if e:
                    e = re.sub(r"(<[^>]*>)","",e[0], re.MULTILINE | re.DOTALL).replace("\n","") #EXECUTION
                else:
                    e = ""
                    
                if c:
                    c = re.sub(r"(<[^>]*>)","",c[0], re.MULTILINE | re.DOTALL).replace("\n","") #COMMENTS
                else:
                    c = ""
                
                temp = name.replace(" ", "+")
                img = requests.get(f'https://www.google.com/search?q={temp}&tbm=isch&ved=2ahUKEwj2_9PYppv-AhV_EGIAHUxUDAgQ2-cCegQIABAA&oq={temp}&gs_lcp=CgNpbWcQAzoKCAAQigUQsQMQQzoHCAAQigUQQzoFCAAQgAQ6CAgAEIAEELEDUPQJWP5fYNliaABwAHgAgAFAiAG2AZIBATOYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAMABAQ&sclient=img&ei=euYxZPbaJ_-giLMPzKixQA&bih=929&biw=1920')
                if img:
                    img = re.findall(r"<img[^>]*src=\"(https:[^>]*?)\"/>", img.text, re.MULTILINE | re.DOTALL)[0] #IMAGE
                else:
                    img = ""
                
                genid = genid.replace("\n","")
                muscleid = muscleid.replace("\n","")
                name = name.replace("\n","")
                equipment = equipment.replace("\n","") 
                u = u.replace("\n","")
                m = m.replace("\n","")
                f = f.replace("\n","")
                p = p.replace("\n","")
                e = e.replace("\n","")
                c = c.replace("\n","")
                img = img.replace("\n","")

                print(f'{genid}\n')
                print(f'{muscleid}\n')
                print(f'{name}\n')
                print(f'{equipment}\n')
                print(f'{u}\n')
                print(f'{m}\n')
                print(f'{f}\n')
                print(f'{p}\n')
                print(f'{e}\n')
                print(f'{c}\n')
                print(f'{img}\n')
                # print(html)
                
                csvline = f'{muscleid}~{genid}~{name}~{equipment}~{u}~{m}~{f}~{p}~{e}~{c}~{img}\n'
                a.write(csvline)
                print(counter)