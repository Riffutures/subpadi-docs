---
sidebar_position: 1
---

# Quick Start

Let's get started with **Subpadi API**

## Getting Started

Get started by **Getting Your Authentication Token From** 


### Step 1: Create An Account

Visit **[subpadi](https://subpadi.ng/signup)** to create an account



### Step 2: Sign In 

Visit **[subpadi](https://subpadi.ng/signin)** to sign in


### Step 3: Copy Your Token

Visit **[subpadi documentation page](https://subpadi.com/documentation)** to obtain your token


![Token image](/img/subpadi-doc.png)


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