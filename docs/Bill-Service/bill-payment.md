---
sidebar_position: 5
---

# Bill Payment

- `meter_no`: Meter number `int`
- `company`: disco id `int`
- `amount`: amount `int`
- `meter_type`: Meter Type `string`


```python
import requests
import json
payload = {'company': 'ikeja-electric',
'meter_no': '1111111111111',
'meter_type': 'prepaid',
'phone_number': '08033104248',
'amount': '1000',
'Customer_name': 'Ayo',
'Customer_address': 'Iyana Iyesi'}
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
url = "https://bigisub.com/api/meter_pay/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "id": 24,
    "meter_no": "1111111111111",
    "company": "ikeja-electric",
    "meter_type": "prepaid",
    "token": "Token : 26362054405982757802",
    "phone_number": "08033104248",
    "amount": 1000,
    "pay_amount": "1050.0",
    "tranx_id": "Bill2OYY--cf3b7",
    "api_id": "17036579474092625189531372",
    "Status": "successful",
    "refund": false,
    "date_created": "2023-12-27T07:19:07.544254",
    "Customer_name": "Ayo",
    "Customer_address": "Iyana Iyesi",
    "ident": "X8nI-jtA11f026"
}
```
View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)