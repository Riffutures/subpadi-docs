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
url = "https://subpadi.com/api/topup/"
res = requests.post(url, data=data, headers=headers)
```

### Response if Low Balance

```bash
{
    "error": [
        " insufficient balance  ₦310.0 "
    ]
}
```