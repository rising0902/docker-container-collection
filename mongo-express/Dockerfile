FROM node:0.12.7

RUN git clone https://github.com/andzdroid/mongo-express.git /opt/app

WORKDIR /opt/app
RUN npm install

COPY ./config.js /opt/app/config.js

EXPOSE 8081

CMD [ "node", "app" ]

