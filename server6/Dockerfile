FROM node:12.4.0
EXPOSE 3006

WORKDIR /home/server6

# COPY ../app/package.json /home/server3
# COPY yarn.lock /home/server1/

# RUN npm ci

COPY /frontend-app /home/server6
COPY /server6 /home/server6

RUN yarn && yarn build

# RUN node ./index.js
# ENTRYPOINT node
# CMD npm install && npm run start
CMD ["node", "server"]