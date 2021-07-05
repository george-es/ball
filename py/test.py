import requests
r = requests.get('http://www.cwl.gov.cn/kjxx/ssq')
print(r.status_code)
# r.encoding = 'utf-8'
print(r.text)
print(__name__)