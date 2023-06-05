# ✔ TypeScript Usage
- Curated use of TypeScript Technology.

****

### TypeScript Installation:
- Inorder to run the typescript(.ts) file, we need to install the typescript.
- Run the following command in cmd(from window)
```
npm install -g typescript
```
- Add the `npm path` to the `Environment Variables`.

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/1ff2385d-42c0-4300-8502-8f62c92bcc43)
 
- After adding PATh to Environment Variables, try running the trypescrit(.ts) file, using below command in the code
```
tsc type.ts
```
- if this command gives below error regarding `Execution Policy` as below, then we need to change the `Execution Policy in our system`.

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/bbe01f3d-4aa2-461e-912a-93defc2d6893)

- We can do this by running the following command in `Window PowerShell` by running as an Administrator.
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/8f7e883a-2d41-4719-a3ca-0fcfa1eb868c)

- After doing this, when we try running the typescript file using the `tsc type.ts` command, it will run perfectly and generates the equivalent `type.js` file.
- Reference : [LINK](https://stackoverflow.com/questions/58796490/tsc-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system)

****

### Usage points:
- After creating the `index.html` and `type.ts` file, we cannot start the HTML file or run the typescript file directly, because Typescript file cannot be interpreted by browser directly, so there is a need to compile it to a Javascript file.
- Compile the `type.ts` file using below command
```
tsc type.ts
```
- After this command, .ts file gets compiled and a new Javascript file is being created in same folder with same folder as the typescript file(here `type.js`), that contains the equivalent Javascript code for the TypeScript code.
- Now we can run the Javascript file `type.js` file using the below command the see the console output:
```
node type.js
```
- Below is the output after running above command:

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/c1c754a8-b0a7-46ef-926b-9239d35b066b)
- Now we can run the `index.html` file using the following command
```
start index.html
```
- this command will open the default browser, which looks like below

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/f59a36b3-2de3-4303-9a1a-679750a18367)

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/a91b91fe-e29c-4bd6-b03a-e19c3c8f7233)
- We can click on the `Load TypeScript` button and see the output triggering on the `console` output under `inspect` section, as below:

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/f9dbc85c-3da7-4a1c-9f94-3ff7cbe04702)

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/3d90dd84-45ee-4613-abb3-ca6c0e481235)

![image](https://github.com/akash-rajak/JavaScript-Usage/assets/57003737/f76e5c16-5e48-477f-9350-6a68451290cd)

****

### IMP Points:
- 
