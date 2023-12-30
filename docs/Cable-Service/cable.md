---
sidebar_position: 2
---

# Cable Payment


- `cablename`: cablename id `int`
- `cableplan`: cableplan id `int`
- `smart_card_number`: smart card number `int`
- `customer_name`: customer name `string`

```python
import requests
import json
payload = {
    "cablename": 2,
    "cableplan": 2,
    "smart_card_number": 1212121212,
    "customer_name": "Ayo"
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

### Response 

```bash
{
    "id": 16,
    "ident": "202312191236203344732118747bb14214-36a8-48c9-a9ac-beaee283eab8",
    "cablename": 2,
    "cableplan": 2,
    "tran_id": "Cable-SwVYgxPcgdfd1",
    "package": "Startime Nova",
    "plan_amount": "90",
    "paid_amount": 90,
    "balance_before": "533635.0",
    "balance_after": "533545.0",
    "smart_card_number": "1212121212",
    "Status": "successful",
    "create_date": "2023-12-19T12:36:21.685597",
    "customer_name": "Ayo",
    "api_response": "Startime Nova successfully subscribed to 1212121212 for Ayo"
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)