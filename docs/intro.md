---
sidebar_position: 1
---

# Quick Start

Let's get started with **Bigisub API**

## Getting Started

Get started by **Getting Your Authentication Token From** 


### Step 1: Create An Account

Visit **[Bigisub](https://bigisub.ng/register/)** to create an account

![Signup image](/img/signup_bigi.png)


### Step 2: Sign In 

Visit **[Bigisub](https://bigisub.ng/login/)** to sign in

![Signin image](/img/login_bigi.png)

### Step 3: Generate Your Token


```python
import requests
import json

payload = {
    "username": "ay",
    "password": "ayo"
}
data = json.dumps(payload)
```

### Send a request with the payload

```python
url = "https://bigisub.com/api/get_token/"
res = requests.get(url, data=data)
```

### Response 

```python
{
    "token": "56227c7416dc680edd2fdc25b8c1e6fdb570c806", # Your token
    "user_id": 10,
    "email": "ayobab@gmail.com"
}
```


## Congratulations! 🎈🎈🎈

Now You can use your authentication token for the authorization header for all your api requests.

```python
user_token = 'eacf1ab727d134b254361d834c28a2bf6ab0a111'
headers = {
      "Content-Type": "application/json",
      "Authorization": f'Token {user_token}'
} 
```

#### Goodluck!!