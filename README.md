
# **Challenge-IT-Crowd**
a fullstack web app for a job application

### Backend:
**Database**: MongoDB

**Depedencies :** 
 - cors: Node.js CORS middleware,
 - dotenv: Loads environment variables from .env file,
 - express: Fast, unopinionated, minimalist web framework,
 - mongodb: The official MongoDB driver for Node.js,
 - mongoose: Mongoose MongoDB ODM,

**Dev Dependencies:**
 - @types/express: TypeScript definitions for Express,
 - ts-node-dev: Compiles your TS app and restarts when files are modified,
 - ts-standard: Typescript Standard Style based on StandardJS,
 - typescript: TypeScript is a language for application scale JavaScript development,

**Available Scripts:**
The first step to run the API locally is to use npm install command in a terminal open in the API root directory that you can dowload from this repository.
Then In the project directory, you can run:

***npm run dev*** 
Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to use it in postman or to fetch the endpoints y your app.
The api will reload when you make changes.\

***npm run tsc*** 
Builds the app for production to the `build` folder.\

***npm run lint***
Run code quality tools, e.g. ESLint, TSLint, etc.\

***npm start***
Runs the API.\

**Available Endpoints:**

***Product routes***
 - POST: http://localhost:4000/product : It receives product data in the body request and creates a product, in the response it send a json with the created product.
 - GET: http://localhost:4000/products : In the response it send an array with all products available.
 - GET: http://localhost:4000/product/:id : It receives a product id in the request params, in the response it send a json with the details of the product.
 - GET:http://localhost:4000/products/:brandId : It receives a brand id in the request params, In the response it send an array with all products available wich have the brand.
 - PUT: http://localhost:4000/product/:id : It receives a product id in the request params and updates the product, in the response it send a json with the updated product with the updated data.
 - DELETE: http://localhost:4000/product/:id : It receives a product id in the request params and deletes the product,  in the response it send a json with a message of this type  {"msg": "1 document deleted

***Brand routes***
 - POST: http://localhost:4000/brand : It receives brand data in the body request and creates a product, in the response it send a json with the created brand.
 - GET: http://localhost:4000/brands : In the response it send an array with all brands available.
 - GET: http://localhost:4000/brand/:id : It receives a brand id in the request params, in the response it send a json with the details of the brand.
 - PUT: http://localhost:4000/brand/:id : It receives a brand id in the request params and updates the brand , in the response it send a json with the updated brand with the updated data.
 - DELETE: http://localhost:4000/brand/:id : It receives a brand id in the request params and deletes the brand ,  in the response it send a json with a message of this type  {"msg": "1 document deleted}.

*If no one of this endpoints it's reached the API result is an error message of this type:{msg: "resource not found"}*
