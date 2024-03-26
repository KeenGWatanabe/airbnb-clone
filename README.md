airbnb
  | (frontend react app)
  |_client > src > pages_IndexPage
  |                     |_LoginPage
  |                     |_RegisterPage
  |     
  |                      
  |  (express backend app) 
  |__api > models > User.js
        |_ index.js


INSTALLATION GUIDE:
before creating folders,
npm install --gobal yarn 
yarn init (type project names)
yarn install

creating folders,
yarn create vite client > React > JavaScript
-once client directory up, from terminal, cd client folder > yarn;
-after yarn installed in client> directory, type yarn dev; (to get port number for browser open)

airbnb-clone\api>npm install express 
airbnb-clone\api>yarn install cors
airbnb-clone\api>yarn add mongoose
airbnb-clone\api>yarn add dotenv
airbnb-clone\api>yarn add bcryptjs
airbnb-clone\api>yarn add jsonwebtoken

240326: video stopped at 1:26 
(cookie jwt for email ,password, doc)