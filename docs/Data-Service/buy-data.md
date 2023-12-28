---
sidebar_position: 2
---

# Buy Data

- `network`: Network Provider `int`
  - 1: 'MTN'
  - 2: 'GLO'
  - 3: '9MOBILE'
  - 4: 'AIRTEL'

- `mobile_number`: Recipient number `string`
- `plan`: plan id `int`
- `Port_number`: Port number default to **true** `string`

```python
import requests
import json
payload = {
    "network": 1,
    "mobile_number": "07062198688",
    "plan": 6,
    "Ported_number": true
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
url = "https://subpadi.com/api/data/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "id": 137538,
    "network": 1,
    "balance_before": "754.0",
    "balance_after": "631.0",
    "mobile_number": "07062198688",
    "plan": 6,
    "Status": "successful",
    "plan_network": "MTN",
    "plan_name": "500.0MB",
    "plan_amount": "₦123.0",
    "create_date": "2023-07-03T13:10:34.071638",
    "Ported_number": true
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)