# InsecureDeserialization-lab1
node-serialize insecure deserialization poc

This is a vulnerable node js App that uses the node-serialize package for serialization and deserialization.

### How work The app
the /notes endpoint is protected and a user must log in the app before accessing it. others are not
when the user log in the application send to the browser a cookie that is checked when accessing the /notes endpoint.
if the cookie is valid the access is allowed if not it's denied.

### Run the App
```
git clone https://github.com/gil01karougbe/InsecureDeserialization-lab1.git
cd InsecureDeserialization-lab1
npm install
node server.js
```
![image](https://github.com/gil01karougbe/InsecureDeserialization-lab1/assets/98090770/c00fdcb6-90fa-4336-a3ab-87be0fa5d470)

Welcome to Safe Notes Kepper!!!!!
![image](https://github.com/gil01karougbe/InsecureDeserialization-lab1/assets/98090770/5bb35f98-690b-4f8b-93fa-efb42bc0746e)

Login!!!!
```
user: admin
password: admin
```
![image](https://github.com/gil01karougbe/InsecureDeserialization-lab1/assets/98090770/6a8545df-98ad-4872-9138-9430b2cffc16)

### Vulnerability


NB:
Many deserialization-based attacks are completed before deserialization is finished. This means that the deserialization process itself can initiate an attack, even if the website's own functionality does not directly interact with the malicious object.
### Exploitation


### Mitigations
```
- Validate and sanitize incoming serialized data.
- Only deserialize data from trusted sources(user input is not trusted data).
- Use secure serialization formats or libraries.
- Keep software and libraries up to date to patch known vulnerabilities
```
