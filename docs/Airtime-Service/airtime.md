---
sidebar_position: 2
---

# Buy Airtime


- `network`: Network Provider `int`
  - 1: 'MTN'
  - 2: 'GLO'
  - 3: '9MOBILE'
  - 4: 'AIRTEL'

- `amount`: Your password `string`
- `phone_number`: Recipient number `string`
- `airtime_type`: Airtime type `string`

```python
import requests
import json
payload = {
"network": 1,
"amount" :"200",
"phone_number": "08011111111",
"airtime_type":"vtu"
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
url = "https://bigisub.com/api/airtime_topup/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "Status": "successful",
    "id": 68,
    "network_name": "mtn",
    "network": 1,
    "amount": "200",
    "phone_number": "08011111111",
    "pay_amount": 198,
    "airtime_type": "vtu",
    "tran_id": "AirvrutjDE2cb2",
    "request_id": "202312270709kUte",
    "date_created": "2023-12-27T07:09:29.073951",
    "response": "TRANSACTION SUCCESSFUL",
    "api_id": "17036573689415260585333325"
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)