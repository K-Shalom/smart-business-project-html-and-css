import os
import re

filepath = r'c:\Users\K.Shalom\Documents\JAVA FILES & PROJECT\FRONTEND SAMPLE\cashier-sales.html'

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace any â€” or similar with —
text = re.sub(r'â€”', '—', text)
text = re.sub(r'â€"', '—', text)
text = re.sub(r'â€“', '–', text)
text = re.sub(r'â†’', '→', text)
text = re.sub(r'â€\x9d', '”', text)
text = re.sub(r'â€\x9c', '“', text)
text = re.sub(r'Ã—', '×', text)
text = re.sub(r'â€', '—', text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text)

print("Character encoding issues fixed on cashier-sales.html")
