## ✔ TypeScript Usage
- Curated use of TypeScript Technology.

### Usage points:
- After creating the `index.html` and `type.ts` file, we cannot start the HTML file or run the typescript file directly, because Typescript file cannot be interpreted by browser directly, so there is a need to compile it to a Javascript file.
- In order to compile the Typescript file(.ts) file into a Javascript file(.js), first need to install the Typescript (tsc) using following command. Open CMD and run the below command
```
npm install -g typescript
```
- for reference in installing typescript : [LINK](https://stackoverflow.com/questions/12685995/cant-find-typescript-compiler-command-tsc-is-not-valid)
- Now to we can compile the `type.ts` file using below command
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
- Now we can run the `inde.html` file using the following command
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



### IMP Points:
- 
