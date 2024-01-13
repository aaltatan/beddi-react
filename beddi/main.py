import requests


url = "https://div1tsz58em9z.cloudfront.net/web/products/3878"
res = requests.get(url=url)
print(res.json())
