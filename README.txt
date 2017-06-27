--Installing required node modules
npm install

--open cmd and run the container server
node node_modules/http-server/bin/http-server -p 9001 -c-1 ./exercises

--open cmd and run the webview server
node node_modules/http-server/bin/http-server -p 9002 -c-1 ./exercises

--browse through page
http://127.0.0.1:9001/sdk/container/

--Supported
basic SDK clickthrough and expansion

--To Do
>Finish MRAID 2 functionalities