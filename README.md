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

### Vulnerability



### Exploitation


