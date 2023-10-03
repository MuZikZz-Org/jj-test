FROM node:16-alpine3.16
COPY server.js .

## Runtime ##
ENTRYPOINT ["node","server.js"]
