import requests
import html5print
import re
from google_images_download import google_images_download  


x = requests.get('https://exrx.net/Lists/Directory')
html = x.text

#Split everything based on list tags
# print(html5print.HTMLBeautifier.beautify(html, 4))
generalmuscles = re.findall(r"<li.*><a.*>(.*?)</a>\n<ul>", html, re.MULTILINE)

links = re.findall(r"<a href=\"(.*?)\">.*<\/a>\n", html)[1:]
links = ['https://exrx.net/Lists/' + item if 'https://exrx.net/Lists/' not in item else item for item in links]

#Links stores the link for each major muscle group page

#Iterate through links --> Extract text for each minor muscle --> Extract (Belt/Cable/...) from minor muscle text --> visit link --> scrape
#Visit each exercise in minor muscle group
#scrape from there
for link in links:
    x = requests.get(link)
    print(html5print.HTMLBeautifier.beautify(x.text, 4))
    break

# print(test)

# print(html)