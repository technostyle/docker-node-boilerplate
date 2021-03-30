FROM node:12.4.0
EXPOSE 3001

WORKDIR /home/server2

COPY package.json /home/server2
# COPY yarn.lock /home/server1/

# RUN npm ci

COPY . /home/server2

# RUN yarn && yarn start
RUN yarn
# RUN node ./index.js
# ENTRYPOINT node
# CMD npm install && npm run start
CMD ["yarn", "start"]