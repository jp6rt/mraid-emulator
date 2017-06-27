--Installing required node modules
npm install

--open cmd and run the container server
node node_modules/http-server/bin/http-server -p 9001 -c-1 ./exercises

--open cmd and run the webview server
node node_modules/http-server/bin/http-server -p 9002 -c-1 ./exercises