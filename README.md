# App for demonstration

### This Single Page App is an example of use several libraries and frameworks: React, Redux (including Redux-form), React-Router.
### Axios library was used to fetch API.

##### To run app:

`npm install`

`npm start`

##### Note:

If you want to see how app manipulates API data you need to look in `actions/index.js` file and switch commenting `const ROOT_URL`.

##### Explanation:

Initial API url is `const ROOT_URL = "http://jsonplaceholder.typicode.com";`. But by default this API doesn't change it's data base content when you want to delete some user. You can't also create new one or edit some.

If you want to manipulate such data base this project include `db.json` file which can be modified by functions inside code. You just need to run `npm install json-server`
and switch comments in `actions/index.js`:

From: 

```javascript
const ROOT_URL = "http://jsonplaceholder.typicode.com";
//const ROOT_URL = "http://localhost:3004";
```

to
```javascript
// const ROOT_URL = "http://jsonplaceholder.typicode.com";
const ROOT_URL = "http://localhost:3004"
```

Last step is run `json-server --watch src/db.json --port 3004`.

Enjoy!

