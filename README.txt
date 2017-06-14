npm install

top:
node node_modules/http-server/bin/http-server -a 10.10.53.112 -p 9001 -c-1 ./exercises

webview:
node node_modules/http-server/bin/http-server -a 10.10.53.112 -p 9002 -c-1 ./exercises