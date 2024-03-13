# `Short Specializations`
[`ALX AFRICA`](https://www.alxafrica.com)
---
```
* JavaScript Programming
* Software Linter
```

---
* [`ES6_Basic`](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x00-ES6_basic/README.md)
* [`ES6_Promise`](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x01-ES6_promise/README.md)
* [`ES6_Classes`](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x02-ES6_classes/README.md)
* [`ES6_Data_Manipulation`](https://github.com/TheeKingZa/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/README.md)
* [`TypeScript`](https://github.com/TheeKingZa/alx-frontend-javascript/blob/master/0x04-TypeScript/README.md)

---

<br/>

# installing Node 12.x:

`seting` up.

```

	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

then close terminal and open new session:

run the commands:
	
	nvm install 12.11
	nvm alias default 12.11
	node -v
	npm -v
```

# installing Jest, Babel and Eslint:

``` 
* install Jest:

	npm install --save-dev jest

* install Babel:

	npm install --save-dev @babel/core @babel/preset-env babel-jest

Create Babel Configurations:
	Filename: .babelrc

	# Note : should be in your root of project and specify the preset:
		{
			"presets": ["@babel/preset-env"]
		} 

* install Eslint:
	npm install --save-dev eslint
	
Initialixe ESLint Configuration:

	npx eslint --init

---
#NOTE this creates the Package.json.
---

	Add Scripts to Package.json:
	
	"scripts": {
	    "test": "jest",
	    "lint": "eslint ."
	}
```
 
After setting up your project you now can now write tests using Jest, transpile your code using Babel, and lint your code using ESLint.




<br/>

---

[`^`](#short-specializations) | [`My_Portfolio`](https://github.com/TheeKingZa/Portfolio/blob/master/README.md)

---
