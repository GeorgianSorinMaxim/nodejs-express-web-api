## Web API implemented using Node.js, Express and MongoDB using JSON as the standard exchange format. 

Why creating an API using Node.js? Togheter with Express.js (web framework) has the potential to be used for building high performance web APIs. The Web API exposes JSON endpoints. The API has the ability to persist the user information, MongoDB and Mongoose (model the application data) being used for this purpose. Mongoose includes built-in type casting and more importantly validation (sanitization of the inputs). The data exchange format is the JavaScript standard, namely JSON. The solution uses functionality for creating, readling, updating and deleting (CRUD) operations on the User model. The API can be consumed using Postman (see below for steps on how to do it). Additional validation can be implemented using https://github.com/chriso/validator.js.


For test coverage, Mocha, the JavaScript test framework (https://mochajs.org/) + Supertest (https://www.npmjs.com/package/supertest) are used. There are a number of unit tests are placed in the routes/test.js file. See the steps below on how to run the tests. Not all possible tests were written for the User model.


## Install the app:
	1. Open a terminal window (iTerm) and go to the path of the cloned folder using the command: $ cd YOUR_FOLDER_PATH
	2. Install the application using the command in the same terminal window: $ npm install -d
	3. Run the app: $ node app

	In the case your environment lacks some modules, you might be requied to install:
	1. Install MongoDB using the command in the same terminal window: $ npm install --save mongo
	2. Install mongoose using the command in the same terminal window: $ npm install --save mongoose
	3. Install mocha using the command in the same terminal window: $ sudo npm install -g mocha
	4. Install assert using the command in the same terminal window: $ sudo npm install --save assert
	5. Install should using the command in the same terminal window: $ sudo npm install --save should
	6. Install supertest using the command in the same terminal window: $ sudo npm install --save supertest
	7. Install body-parser using the command in the same terminal window: $ sudo npm install --save body-parser
	8. Install cookie-parser using the command in the same terminal window: $ sudo npm install --save cookie-parser
	9. Install debug using the command in the same terminal window: $ sudo npm install --save debug
	10. Install express using the command in the same terminal window: $ sudo npm install --save express
	11. Install jade using the command in the same terminal window: $ sudo npm install --save jade
	12. Install morgan using the command in the same terminal window: $ sudo npm install --save morgan


## Test the app:
	1. Open a terminal window (iTerm) and go to the path of the cloned folder using the command: $ cd YOUR_FOLDER_PATH
	2. Go to the routes folder using the command: $ cd routes
	3. Run the tests using: $ mocha test


## See below the steps on how to test the API: 	
	1. Open Postman

	2. For viewing all Users, use the GET request on the following url after starting the application: http://localhost:3000/users

	3. For creating an user, use the POST request on the following url: http://localhost:3000/users
 	 	In the POST request body choose: x-www-form-urlencoded
 	 	Add the following Keys in the Body of the request user_email, user_forename test, user_surname and for for each Keys data that represents the user email, firstname and lastname.
 	 	Run the request, a new user is created with the inputted data.
 	4. Try using the POST request with the same data and check if an user with the same email address is creaded.

	5. For updating an user, use the PUT request on the following url: http://localhost:3000/users
		In the PUT request body choose: x-www-form-urlencoded
 	 	Add the following Keys in the Body of the request user_email, user_forename test, user_surname and for for each Keys data that represents the user email, firstname and lastname.
 	 	Add an id key that contains an existing ID of a previously created user.
 	 	Run the request, the selected user is now updated with the inputted data.

 	6. For deleting an user, use the DEL request on the following url: http://localhost:3000/users
 		In the DEL request body choose: x-www-form-urlencoded
 	 	Add an id key that contains an existing ID of a previously created user.
 	 	Run the request, the selected user is now deleted.

 
