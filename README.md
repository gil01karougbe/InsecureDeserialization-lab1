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
Notes airea!!!
![image](https://github.com/gil01karougbe/InsecureDeserialization-lab1/assets/98090770/84e2f13d-2b5a-4a44-9240-3c6f57f845d5)


### Vulnerability
The cookie sent to the user a serialized object using the node package node-serialize and is user-controllable this means that the application should not trust this input for deserialization.
here no checks are made before the deserialization process so if we send a malicious object the application will trust it and go to the deserialization process.
with all of that being said let's go to the exploitation step!!!
NB:
Many deserialization-based attacks are completed before deserialization is finished. This means that the deserialization process itself can initiate an attack, even if the website's own functionality does not directly interact with the malicious object.
### Exploitation
Check the rce.js file to see how the malicious object is crafted!!!
![image](https://github.com/gil01karougbe/InsecureDeserialization-lab1/assets/98090770/bc1fb050-825d-4422-a408-b85a4c253593)
Cookie Modification!!!!
![image](https://github.com/gil01karougbe/InsecureDeserialization-lab1/assets/98090770/3eba27fb-ba2f-4d79-9c97-98693eb0c623)

Reverse shell!!!!
![image](https://github.com/gil01karougbe/InsecureDeserialization-lab1/assets/98090770/2ba2c28f-a1a3-4051-b7a8-34e7e543fe1f)


### Mitigations
```
- Validate and sanitize incoming serialized data.
- Only deserialize data from trusted sources(user input is not trusted data).
- Use secure serialization formats or libraries.
- Keep software and libraries up to date to patch known vulnerabilities
```
