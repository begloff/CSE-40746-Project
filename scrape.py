import requests
import html5print
import re
from google_images_download import google_images_download  


x = requests.get('https://exrx.net/Lists/Directory')
html = x.text

#Split everything based on list tags
# print(html5print.HTMLBeautifier.beautify(html, 4))
generalmuscles = re.findall(r"<li.*><a.*>(.*?)</a>\n<ul>", html, re.MULTILINE)

temp = {}

for i in range(len(generalmuscles)):
    if i != len(generalmuscles) - 1:
        regex = re.escape(generalmuscles[i]) + r"(.*?)" + re.escape(generalmuscles[i+1]) 
        temp[generalmuscles[i]] = (re.findall(regex, html, re.MULTILINE | re.DOTALL ))
    else:
        regex = re.escape(generalmuscles[i]) + r"(.*?)" + re.escape('Other Exercises')
        temp[generalmuscles[i]] = (re.findall(regex, html, re.MULTILINE | re.DOTALL ))

#Temp contains all of the list elements for a given muscle group
#Need to extract non <a> links and append them to <a> below
    # \\n<li>([A-Za-z]*?)\\n<ul>
    #Extracts all partial names

second = {}

for i in temp:
    # print(temp[i])
    r = re.findall(r">([A-za-z &]*?)</a>", temp[i][0], re.MULTILINE | re.DOTALL)
    second[i] = r

#Update Muscles based on their
for i in range(len(generalmuscles)):
    if generalmuscles[i] in second[generalmuscles[i]]:
        second[generalmuscles[i]].remove(generalmuscles[i])

generalmusclescsv = {}
#Next Build csv with general muscles first
for i in range(len(generalmuscles)):
    generalmusclescsv[generalmuscles[i]] = [i]

#Build csv for individual muscles now
counter = 0
detailmusclescsv = {}

for i in range(len(second)):
    for j in range(len(second[generalmuscles[i]])):
        if second[generalmuscles[i]][j] == 'Flexors' or second[generalmuscles[i]][j] == 'Extensors':
            second[generalmuscles[i]][j] = 'Wrist ' + second[generalmuscles[i]][j]
        elif second[generalmuscles[i]][j] == 'Upper' or second[generalmuscles[i]][j] == 'Middle' or second[generalmuscles[i]][j] == 'Lower':
            second[generalmuscles[i]][j] = 'Trapezius ' + second[generalmuscles[i]][j]
        elif second[generalmuscles[i]][j] == 'Sternal' or second[generalmuscles[i]][j] == 'Clavicular':
            second[generalmuscles[i]][j] = 'Pectoralis Major ' + second[generalmuscles[i]][j]
        elif second[generalmuscles[i]][j] == 'General':
            second[generalmuscles[i]][j] = second[generalmuscles[i]][j] + ' ' + generalmuscles[i]

        detailmusclescsv[second[generalmuscles[i]][j]] = [counter, generalmusclescsv[generalmuscles[i]][0]]
        counter += 1


        
    
# print(detailmusclescsv)

#From here --> need to navigate to all pages associated with each muscle

#For each muscle --> picture, other names, heads, comments, and related muscles
a = open('general-muscles.csv','w')
for i in generalmusclescsv:
    #General Muscles is just the name and ID number
    a.write(f'{i}~{generalmusclescsv[i][0]}\n')



for i in detailmusclescsv:

    temp = []

    test = i.replace(" ","")

    if test == "Anterior" or test == "Lateral" or test == 'Posterior':
        test = "Deltoid"+test
    elif test == "PectoralisMajorSternal" or test == "PectoralisMajorClavicular":
        test = test.replace("Major", "")
    elif test == "HipAdductors":
        test = "Adductors" 
    elif test == 'DeepExternalRotators':
        test = 'HipExternalRotators'

    x = requests.get(f'https://exrx.net/Muscles/{test}')
    html = x.text

#   Other Names(.*?)<h2>Heads --> extracts other names
#   Heads(.*?)<h2>Movement --> extracts heads
#   Related Muscles(.*?)</ul> --> extracts related muscles
#   Comments Comments(.*?)</ul> --> extracts comments
    x = re.findall(r"Other Names(.*?)<h2>Heads", html, re.MULTILINE | re.DOTALL)
    if(x):
        z = re.findall(r"<li>(.*?)</li>", x[0], re.MULTILINE | re.DOTALL)
        for item in z:
            item = re.sub(r"(<[^>]*>)","",item,re.MULTILINE | re.DOTALL)
        temp.append(z)
    else:
        temp.append([])

    x = re.findall(r"Heads(.*?)<h2>Movement", html, re.MULTILINE | re.DOTALL)
    if(x):
        z = re.findall(r"<li>(.*?)</li>", x[0], re.MULTILINE | re.DOTALL)
        for item in z:
            item = re.sub(r"(<[^>]*>)","",item,re.MULTILINE | re.DOTALL)
        temp.append(z)
    else:
        temp.append([])

    x = re.findall(r"Related Muscles(.*?)</ul>", html, re.MULTILINE | re.DOTALL)
    if(x):
        z = re.findall(r"<li>(.*?)</li>", x[0], re.MULTILINE | re.DOTALL)
        for item in z:
            item = re.sub(r"(<[^>]*>)","",item,re.MULTILINE | re.DOTALL)
        temp.append(z)
    else:
        temp.append([])

    x = re.findall(r"Comments(.*?)</div>", html, re.MULTILINE | re.DOTALL)
    if(x):
        z = re.sub(r"(<[^>]*>)","",x[0],re.MULTILINE | re.DOTALL)
        temp.append([z])
    else:
        temp.append([])

    # print(i, temp)
    detailmusclescsv[i].append(temp)

#Extracted Most Important Information to this point
#CSV file format: Name, Id, GeneralID, Othernames(comma-sep), heads, related muscles, comments
a = open("detail-muscles.csv","w", newline='\n')
for entry in detailmusclescsv:
    # line = []
    # line.append(entry) #Name

    # line.append(detailmusclescsv[entry][0]) #ID
    # line.append(detailmusclescsv[entry][1]) #General ID

    # s = ""
    # for e in range(len(detailmusclescsv[entry][2][0])):
    #     if len(detailmusclescsv[entry][2][0]) > 1 and e != len(detailmusclescsv[entry][2][0]) - 1:
    #         z = re.sub(r"(<[^>]*>)","",detailmusclescsv[entry][2][0][e],re.MULTILINE | re.DOTALL)
    #         z = z.replace("\n","")
    #         if z:
    #             s = s + z
    #             if s[-1] == " ":
    #                 s = s[:-1] + ","
    #     else:
    #         z = re.sub(r"(<[^>]*>)","",detailmusclescsv[entry][2][0][e],re.MULTILINE | re.DOTALL)
    #         z = z.replace("\n","")
    #         if z:
    #             s = s + z
    #             if s[-1] == " ":
    #                 s = s[:-1]
    # line.append(s) #Othernames

    # s = ""
    # for e in range(len(detailmusclescsv[entry][2][1])):
    #     if len(detailmusclescsv[entry][2][1]) > 1 and e != len(detailmusclescsv[entry][2][1]) - 1:
    #         z = re.sub(r"(<[^>]*>)","",detailmusclescsv[entry][2][1][e],re.MULTILINE | re.DOTALL)
    #         z = z.replace("\n","")
    #         if z:
    #             s = s + z
    #             if s[-1] == " ":
    #                 s = s[:-1] + ","
    #     else:
    #         z = re.sub(r"(<[^>]*>)","",detailmusclescsv[entry][2][1][e],re.MULTILINE | re.DOTALL)
    #         z = z.replace("\n","")
    #         if z:
    #             s = s + z
    #             if s[-1] == " ":
    #                 s = s[:-1]
    # line.append(s) #heads

    # s = ""
    # for e in range(len(detailmusclescsv[entry][2][2])):
    #     if len(detailmusclescsv[entry][2][2]) > 1 and e != len(detailmusclescsv[entry][2][2]) - 1:
    #         z = re.sub(r"(<[^>]*>)","",detailmusclescsv[entry][2][2][e],re.MULTILINE | re.DOTALL)
    #         z = z.replace("\n","")
    #         if z:
    #             s = s + z
    #             if s[-1] == " ":
    #                 s = s[:-1] + ","
    #     else:
    #         z = re.sub(r"(<[^>]*>)","",detailmusclescsv[entry][2][2][e],re.MULTILINE | re.DOTALL)
    #         z = z.replace("\n","")
    #         if z:
    #             s = s + z
    #             if s[-1] == " ":
    #                 s = s[:-1]
    # line.append(s) #related muscles

    # s = ""
    # for e in range(len(detailmusclescsv[entry][2][3])):
    #     if len(detailmusclescsv[entry][2][3]) > 1 and e != len(detailmusclescsv[entry][2][3]) - 1:
    #         z = re.sub(r"(<[^>]*>)","",detailmusclescsv[entry][2][3][e],re.MULTILINE | re.DOTALL)
    #         z = z.replace("\n","")
    #         if z:
    #             s = s + z
    #             if s[-1] == " ":
    #                 s = s[:-1] + ","
    #     else:
    #         z = re.sub(r"(<[^>]*>)","",detailmusclescsv[entry][2][3][e],re.MULTILINE | re.DOTALL)
    #         z = z.replace("\n","")
    #         if z:
    #             s = s + z
    #             if s[-1] == " ":
    #                 s = s[:-1]


    # <img[^>]*src="(https:[^>]*?)"/> regex for selecting internet srcs
    e = entry.replace(" ","")
    print(f"https://www.google.com/search?q={e}muscles&tbm=isch&ved=2ahUKEwjk34r_sIz-AhXrM94AHVscCf8Q2-cCegQIABAA&oq={e}muscles&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEOgoIABCKBRCxAxBDOggIABCABBCxAzoHCAAQigUQQzoGCAAQBRAeOgkIABCABBAKEBg6BwgAEIAEEBhQpA1Y2hlgwBpoAHAAeACAAV2IAYIHkgECMTKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=AxQqZKTSH-vn-LYP27ik-A8&bih=1021&biw=1064")
    a = requests.get(f"https://www.google.com/search?q={e}muscles&tbm=isch&ved=2ahUKEwjk34r_sIz-AhXrM94AHVscCf8Q2-cCegQIABAA&oq={e}muscles&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEOgoIABCKBRCxAxBDOggIABCABBCxAzoHCAAQigUQQzoGCAAQBRAeOgkIABCABBAKEBg6BwgAEIAEEBhQpA1Y2hlgwBpoAHAAeACAAV2IAYIHkgECMTKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=AxQqZKTSH-vn-LYP27ik-A8&bih=1021&biw=1064")
    print(a.text)
    # print(re.match(r"<img[^>]*src=\"(https:[^>]*?)\"/>", a.text, re.MULTILINE | re.DOTALL))

    # line.append(s) #Comments



    # linestr = ""
    # for e in line:
    #     if e != line[-1]:
    #         linestr = linestr + str(e) + "~"
    #     else:
    #         linestr = linestr + str(e)

    # linestr += '\n'

    # a.write(linestr)