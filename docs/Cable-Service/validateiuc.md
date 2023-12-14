---
sidebar_position: 5
---

# Validate IUC

- `smartcardnumber`: smartcardnumber number `string`
- `cablename`: cablename `string`

```python
import requests
import json
payload = {
    "smartcardnumber": "755894244",
    "cablename": "DSTV"
}
user_token = 'eacf1ab727d134b254361d834c28a2bf6ab0a111'
headers = {
      "Content-Type": "application/json",
      "Authorization": f'Token {user_token}'
} 
# jsonify the payload
data = json.dumps(payload)

```

### Send a post request with the payload

```python
url = "https://subpadi.com/api/validateiuc/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "invalid": false,
    "name": "NWAIKPOMW Ada"
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)