Open this project

Do `npm install`, this will install the dependency that are used in this project

Please ensure `Node` is being installed with version `18` in the computer as the project is based on `Node.js`

Although different node version won't be an issue, but to keep the configuration same as local env

Once `npm install` is done, run `npm run start` in terminal

This command will run index.ts file we have in `src` folder



For simplicity i have kept api based application where certain endpoints are exposed to test the application

1. `/add` route is used to add a contact to our address-book
2. `/search-by-name` route is used to search any contact by name (full or partial match)
2. `/search-by-number` route is used to search any contact by phonenumber (full or partial match)

For searching a contact i have used trie