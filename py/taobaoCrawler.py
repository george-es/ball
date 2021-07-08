# -*- coding: UTF-8 -*-
import requests
import re
def getHTMLText(url):
  try:
    kv = {
      'user-agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
    }
    r = requests.get(url, headers = kv, timeout=30)
    print(r.headers)
    r.raise_for_status()
    r.encoding = r.apparent_encoding
    return r.text
  except:
    return ''

def parsePage(ilt, html):
  try:
    plt = re.findall(r'\"view_price\"\:\"[\d\.]*\"', html)
    tlt = re.findall(r'\"raw_title\"\:\".*?\"', html)
    # print(html)
    f = open('./log.txt','w')
    f.write(str(html)+'\n')

    for i in range(len(plt)):
      price = eval(plt[i].split(':')[1])
      title = eval(tlt[i].split(':')[1])
      ilt.append([price, title])
  except:
    print('error')

def printGoodsList(ilt):
  tplt = "{:4}\t{:8}\t{:16}"
  print(tplt.format("序号","价格","商品名称"))
  count = 0
  for g in ilt:
    count = count + 1
    print(tplt,format(count, g[0], g[1]))

def main():
  goods = '书包'
  depth = 2
  start_url = 'https://s.taobao.com/search?q=' + goods
  infoList = []
  for i in range(depth):
    try:
      url = start_url + '&s=' + str(44 * i)
      html = getHTMLText(url)
      parsePage(infoList, html)
    except:
      continue

  print(infoList)
  printGoodsList(infoList)

main()
