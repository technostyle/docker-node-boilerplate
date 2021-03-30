FROM node:12.4.0
EXPOSE 3005

WORKDIR /home/server5

# COPY ../app/package.json /home/server3
# COPY yarn.lock /home/server1/

# RUN npm ci

COPY /frontend-app /home/server5

# RUN yarn && yarn start
RUN yarn
RUN ls node_modules
RUN yarn build

# RUN node ./index.js
# ENTRYPOINT node
# CMD npm install && npm run start
CMD ["node", "server"]