---
sidebar_position: 5
---

# Validate IUC

- `card_no`: smartcardnumber number `string`
- `cable_name`: cablename `string`

```python
import requests
import json
payload = {
    "card_no": "1212121212",
    "cable_name": "DSTV"
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
url = "https://bigisub.com/api/verify_cable/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "Customer_Name": "Testermetri",
    "Status": "OPEN",
    "Due_Date": "November 24th, 2021",
    "Customer_Number": 26117953,
    "Customer_Type": "DSTV",
    "Current_Bouquet": "DStv  Compact N7900 + ExtraView Access N2,500",
    "Current_Bouquet_Code": "dstv79, extraview-access",
    "Renewal_Amount": 63885
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)