import requests
import json

def getData(url):
  try:
    kv = {
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      'Connection': 'keep-alive',
      'Cookie': 'UniqueID=Ym7ohh5CFhWdvD6g1625731832988; Sites=_21; _ga=GA1.3.857428964.1625731834; _gid=GA1.3.1807927305.1625731834; _gat_gtag_UA_113065506_1=1; 21_vq=16',
      'Host': 'www.cwl.gov.cn',
      'Referer': 'http://www.cwl.gov.cn/kjxx/ssq/kjgg/',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      'X-Requested-With': 'XMLHttpRequest',
    }
    r = requests.get(url, headers=kv, timeout=3000)
    r.raise_for_status()
    rawData = json.loads(r.content)#返回字典
    return rawData
  except:
    print('')

def parseData(data):
  try:
    if data['message'] == '查询成功':
      result = data['result']
      for i in result:
        print(i['red'], i['blue'])
  except:
    print('')

def main():
  try:
    start_url = 'http://www.cwl.gov.cn/cwl_admin/kjxx/findDrawNotice?name=ssq&issueCount=100'
    data = getData(start_url)
    f = open('./ssq.txt', 'w')
    f.write(str(data))
    parseData(data)
    print('')
  except:
    print('')

main()