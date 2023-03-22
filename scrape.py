import requests
import html5print


x = requests.get('https://exrx.net/Lists/Directory')
html = x.text

#Split everything based on list tags

print(html5print.HTMLBeautifier.beautify(html, 4))

y = html.split('<li ')
for entry in y:
    print(entry)
