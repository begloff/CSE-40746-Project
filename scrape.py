import requests
import html5print
import re


x = requests.get('https://exrx.net/Lists/Directory')
html = x.text

#Split everything based on list tags
print(html)
# print(html5print.HTMLBeautifier.beautify(html, 4))
generalmuscles = re.findall(r"<li.*><a.*>(.*?)</a>\n<ul>", html, re.MULTILINE)

print()
print(generalmuscles)
temp = {}

for i in range(len(generalmuscles)):
    if i != len(generalmuscles) - 1:
        regex = re.escape(generalmuscles[i]) + r"(.*?)" + re.escape(generalmuscles[i+1]) 
        temp[generalmuscles[i]] = (re.findall(regex, html, re.MULTILINE | re.DOTALL ))

#Temp contains all of the list elements for a given muscle group
#Need to extract non <a> links and append them to <a> below


for i in temp:
    regex = re.findall(r"<li>(.*?)<", temp[i])

#Strategy: Extract General muscle group --> extract individual list elements from each

# y = html.split('<li ')
# for entry in y:
#     print(entry)

print()
