# folksLogic

1. For running the project do npm start , the APIs will run by default on 8888 port no
2. Used mysql as db and sequelize for db connection and trnsactions as mentioned in the task
3. APIs description:-
   a. Register API:- This API can be used for registering a user with basic information
   b. Login API: In login user can login with useremail and password, and if authenticated successfully will recieve a token which will have expire in one hour, and the expiration time can be modified authContants in constants file in utils folder, with the help this token only user can perform post , put and delete tasks
   c. Products API(Get):- Products get API is un athenticated API or Public API which is having feature of pagination as well, by default limit as 20
   d. Product APIs(post,put,delete):- Post , put , delete are private API and require JWT token, if not passed will through forbidden error

4.  All the db related configuration is there in db config file and I have used my local db for the same

5. For Token authentication used jsonwebtoken module
6. added postman collection with All the endpoints including payload as well.
