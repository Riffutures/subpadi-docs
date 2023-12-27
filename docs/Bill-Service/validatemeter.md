---
sidebar_position: 2
---

# Validate Meter Number


- `meter_no`: Meter number `int`
- `disco_name`: disco name `string`
- `meter_type`: Meter Type **true** `string`

```python
import requests
import json
payload = {'meter_no': '1111111111111',
'disco_name': 'ikeja-electric',
'meter_type': 'prepaid'}
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
url = "https://www.bigisub.com/api/meter_validate"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "Customer_Name": "TESTMETER1",
    "Meter_Number": "1111111111111",
    "Customer_District": "007903312",
    "Address": "ABULE - EGBA BU ABULE"
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)