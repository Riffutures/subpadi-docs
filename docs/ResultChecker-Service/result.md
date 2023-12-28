---
sidebar_position: 2
---

# Buy Exam Pin

- `quantity`: exam quantity `int`
- `exam_name`: Exam name `string`


```python
import requests
import json
payload = {
    "quantity": 1,
    "exam_name": "NECO"
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
url = "https://subpadi.com/api/cablesub/"
res = requests.post(url, data=data, headers=headers)
```

### Response if Low Balance

```bash
{
    "id": 24,
    "exam": "NECO",
    "quantity": "ikeja-electric",
    "pin": "26362054405982757802",
    "amount": 1000,
    "pay_amount": "1050.0",
    "tran_id": "EXAM2OYY--cf3b7",
    "status": "successful",
    "refund": false,
    "date_created": "2023-12-27T07:19:07.544254",
    "ident": "X8nI-jtA11f026"
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)