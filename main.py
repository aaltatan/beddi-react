import httpx
import json


url = "https://apiv2.tajir.store/web/stores/home/beddishop"
res = httpx.get(url)
categories = res.json()["data"]["categories"]

url_products = "https://apiv2.tajir.store/web/stores/beddishop/products"
params = {"page": 1, "per_page": 200}
res = httpx.get(url_products, params=params)
products = res.json()["data"]

data = {"products": products, "categories": categories}

with open("server/db.json", "w") as file:
    file.write(json.dumps(data))
