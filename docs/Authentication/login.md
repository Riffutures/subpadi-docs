---
sidebar_position: 1
---

# Login

Use your web or mobile login credentials


- `username`: Your username `string`

- `password`: Your password `string`

```python
import requests
import json

payload = {
    "username": "ay",
    "password": "ayo"
}
data = json.dumps(payload)
```

### Send a post request with the payload

```python
url = "https://bigisub/api/get_token/"
res = requests.post(url, data=data)
```

### Response 

```python
{
    "token": "56227c7416dc680edd2fdc25b8c1e6fdb570c806", # Your token
    "user_id": 10,
    "email": "ayobab@gmail.com"
}
```
View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)