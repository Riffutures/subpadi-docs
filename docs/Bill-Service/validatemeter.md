---
sidebar_position: 2
---

# Validate Meter Number


- `meter_number`: Meter number `int`
- `disco_name`: disco name `string`
- `mtype`: Meter Type **true** `string`

```python
import requests
import json
data = {"meternumber": 	1111111111111 ,
                    "disconame": "Ikeja Electric", "mtype": 'prepaid' }
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
url = "https://www.subpadi.com/api/validatemeter/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "invalid": false,
    "name": "David Dele",
    "address": "87 AJIMATU OFF MURITALA STREET",
    "content": {
        "Customer_Name": "David Dele",
        "Address": "87 AJIMATU OFF MURITALA STREET",
        "Meter_Number": "43067784709",
        "Customer_Arrears": "",
        "Minimum_Amount": 7.49,
        "Min_Purchase_Amount": 7.49,
        "Can_Vend": "yes",
        "Business_Unit": "",
        "Meter_Type": "PREPAID",
        "WrongBillersCode": false
    }
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)