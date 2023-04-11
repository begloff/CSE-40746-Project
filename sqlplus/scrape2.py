import requests
import html5print
import re
from google_images_download import google_images_download  
import csv
from bs4 import BeautifulSoup


x = requests.get('https://exrx.net/Lists/Directory')
html = x.text

#Split everything based on list tags
# print(html5print.HTMLBeautifier.beautify(html, 4))
generalmuscles = re.findall(r"<li.*><a.*>(.*?)</a>\n<ul>", html, re.MULTILINE)

links = re.findall(r"<a href=\"(.*?)\">.*<\/a>\n", html)[1:]
links = ['https://exrx.net/Lists/' + item if 'https://exrx.net/Lists/' not in item else item for item in links]

identity = {}
identity2 = {}
identity3 = {}
#Links stores the link for each major muscle group page

#Load in detail-muscles.csv and extract necessary fields
csvfile = open('detail-muscles.csv', mode='r')
csvreader = csv.reader(csvfile, delimiter='~')
for row in csvreader:
    #Make dict storing Name, and general muscle group
    if row[2] not in identity2:
        identity2[row[2]] = []
    
    identity3[row[0]] = row[1]
    
    identity2[row[2]].append(row[0])
    identity[row[0]] = [row[2]]


#Iterate through links --> Extract text for each minor muscle --> Extract (Belt/Cable/...) from minor muscle text --> visit link --> scrape
#Visit each exercise in minor muscle group
#scrape from there

#Example to extract --> # Sternocleidomastoid(.*?) Splenius --> First to second last in a group
#Extract Last -->  Splenius(.*?)</article>


raw = {}
counter = 1


#['https://exrx.net/Lists/ExList/NeckWt', 'https://exrx.net/Lists/ExList/ShouldWt', 'https://exrx.net/Lists/ExList/ArmWt', 'https://exrx.net/Lists/ExList/ForeArmWt', 'https://exrx.net/Lists/ExList/BackWt', 'https://exrx.net/Lists/ExList/ChestWt', 'https://exrx.net/Lists/ExList/WaistWt', 'https://exrx.net/Lists/ExList/HipsWt', 'https://exrx.net/Lists/ExList/ThighWt', 'https://exrx.net/Lists/ExList/CalfWt']

for link in links:
    x = requests.get(link)
    
    # if link == 'https://exrx.net/Lists/ExList/BackWt':
    #     print(x.text)
    
    #Use regex to extract necessary (text
    for i in range(len(identity2[str(counter)]) - 1):
        regex = re.escape(identity2[str(counter)][i]) + r"(.*?)" + re.escape(identity2[str(counter)][i+1])
        identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        if identity2[str(counter)][i] == 'Abductors':
            regex = re.escape(identity2[str(counter)][i]) + r"(.*?)" + r"Hip Flexors"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'Flexors':
            regex = r"Hip Flexors" + r"(.*?)" + r"Deep Hip External Rotators"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'General Chest':
            regex = r"General or <a href=\"../../Muscles/PectoralisSternal\">Pectoralis Major, Sternal" + r"(.*?)" + r"Pectoralis Major, Clavicular"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'Pectoralis Major Clavicular':
            regex = r"Pectoralis Major, Clavicular(.*?)Pectoralis Minor"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'General Back':
            regex = r"General Back(.*?)Latissimus Dorsi</a> &amp; <a href=\"../../Muscles/TeresMajor\">Teres Major"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'Latissimus Dorsi & Teres Major':
            regex = r"Latissimus Dorsi</a> &amp; <a href=\"../../Muscles/TeresMajor\">Teres Major(.*?)Trapezius, Upper Fibers</a> &amp; <a href=\"../../Muscles/LevatorScapulae\">Levator Scapulae"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'Trapezius Upper':
            regex = r"Trapezius, Upper Fibers</a> &amp; <a href=\"../../Muscles/LevatorScapulae\">Levator Scapulae(.*?)Trapezius, Middle Fibers"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'Trapezius Middle':
            regex = r"Trapezius, Middle Fibers(.*?)Trapezius, Lower Fibers"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'Trapezius Lower':
            regex = r"Trapezius, Lower Fibers(.*?)Rhomboids"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'Rhomboids':
            regex = r"Rhomboids</a></h2>(.*?)Infraspinatus</a> &amp; <a href=\"../../Muscles/TeresMinor\">Teres Minor"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        elif identity2[str(counter)][i] == 'Infraspinatus & Teres Minor':
            regex = r"Infraspinatus</a> &amp; <a href=\"../../Muscles/TeresMinor\">Teres Minor(.*?)Subscapularis"
            identity[identity2[str(counter)][i]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
        
    
        
        
    regex = re.escape(identity2[str(counter)][-1]) + r"(.*?)" +  r"</article>"
    identity[identity2[str(counter)][-1]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))
    if identity2[str(counter)][-1] == 'Deep External Rotators':
        regex = r"Deep Hip External Rotators"+ r"(.*?)" + r"</article>"
        identity[identity2[str(counter)][-1]].append(re.findall(regex, x.text, re.MULTILINE | re.DOTALL))

    counter += 1
    
    identity['General Calves'] = identity['Gastrocnemius']
    identity['Quadratus Lumborum'] = identity['Obliques']
    identity['Pectoralis Major Sternal'] = identity['General Chest']
    identity['Levator Scapulae'] = identity['Trapezius Upper']

    
a = open('summary.txt', 'w')
for entry in identity:
    identity[entry] = list(filter(None,identity[entry]))
    a.write(f'{entry} {str(identity[entry])}\n\n')
#Issues --> General Calves, Deep External Rotators, Abductors, Quadratus Lumborum, Transverse Abdominis, General Chest, Sternal, Clavicular, General Back, Trapezius, Wrist Flexors, 


#To get the type of mechanic look for list element with no a tag
types = {}
indlinks = {}
lks = set()

for i in identity:
    types[i] = re.findall(r"<li>([^<>]*?)<", identity[i][1][0], re.MULTILINE | re.DOTALL)
    types[i] = list(filter(None,types[i]))

# for i in types:
#     print(i, types[i])
#     print()
    
#Plan from here try to assign a type to all links stored within the directory for a specific muscle
#Strategy: compile a list of all links with types --> go through all links again and make a category of not assigned ones
for i in identity:
    indlinks[i] = []
    soup = BeautifulSoup(identity[i][1][0], 'html.parser')
    match = soup.find_all("li")
    #Loop through all muscles
    for j in types[i]:
        #Select from match which contains j
        sel = [i for i in match if j in i]
        if sel:
            sel = sel[0]
            #Select all links from this
            indlinks[i].append((j,sel.find_all("a")))
            
# print(indlinks)

for i in indlinks:
    temp = []
    if indlinks[i]:
        for j in indlinks[i]:
            l = []
            for k in j[1]:
                # k.replace("../../", "https://exrx.net/")
                l.append(k['href'].replace("../../","https://exrx.net/"))
                lks.add(k['href'].replace("../../","https://exrx.net/"))
            temp.append((j[0],l))
        indlinks[i] = temp
            
            
#At this point: Have links for each muscle group with what mechanic is used
#From Here: Make csv file with each exercise
#CSV Format:
#ID, muscleID, name, utility, mechanics, force, method, preparation, execution, comments, gif/video

counter = 684

# print(identity3)
a = open('exercises.csv','a')
for i in indlinks:
    # ID = counter
    # muscleID = identity3[i]
    # Name, Utility, mechanics, force, preparation, execution, comments scraped
    # Extract method from indlinks[i][j]
    
    # Name extraction: look for <title> tags
    # Utility, Mechanics, Force extraction: Use regex to pull each out indiv
    
    # Utility: <strong>Utility(.*?)</tr>
    # Mechanics: <strong>Mechanics(.*?)</tr>
    # Force: <strong>Force(.*?)</tr>
    
    # Preparation: <p><strong>Preparation</strong></p>(.*?)</p>
    # Execution: <p><strong>Execution</strong></p>(.*?)</p>
    # Comments: <h2>Comments</h2>(.*?)</p>
    # Extract from p tags for this  

    if int(identity3[i]) < 24:
        continue
    
    for j in indlinks[i]:
        
        for k in j[1]:
            csvstring = ''
            counter += 1
            genid = str(counter) #ID
            muscleid = identity3[i] #MUSCLE ID
            
            if 'https://exrx.net' not in k:
                counter -= 1
                continue
            
            z = requests.get(k)
            html = z.text
            
            soup = BeautifulSoup(html, 'html.parser')
            name = soup.find('title').text.replace("ExRx.net : ","")
            
            #Equipment --> j[0]
            equipment = j[0] #EQUIPMENT
            
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
            
            csvline = f'{genid}~{muscleid}~{name}~{equipment}~{u}~{m}~{f}~{p}~{e}~{c}~{img}\n'
            a.write(csvline)
            print(counter)
            

            

# print(indlinks)