from node:current-alpine3.22

workdir /app

copy . .

run npm install

expose 3000

cmd ["npm", "run", "dev", "--", "--host" ,"0.0.0.0", "--port", "3000"]