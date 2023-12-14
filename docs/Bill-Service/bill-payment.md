---
sidebar_position: 5
---

# Bill Payment

- `meter_number`: Meter number `int`
- `disco_name`: disco id `int`
- `amount`: amount `int`
- `mtype`: Meter Type `string`


```python
import requests
import json
payload = {
    "disco_name": 1,
    "amount": 1000,
    "meter_number":9037346247,
    "MeterType": 11
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
url = "https://subpadi.com/api/billpayment/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "error": [
        "insufficient balance,  your current balance ₦433.0  "
    ]
}
```
View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)