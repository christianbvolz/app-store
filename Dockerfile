FROM node:lts-alpine

WORKDIR /app-frontend

COPY package* .

RUN npm install -g @angular/cli

RUN npm install

COPY . .

CMD ["ng", "serve", "--host", "0.0.0.0"]