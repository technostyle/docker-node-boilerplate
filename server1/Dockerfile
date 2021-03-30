FROM node:12.4.0
EXPOSE 3000

WORKDIR /home/server1

COPY package.json /home/server1
# COPY yarn.lock /home/server1/

# RUN npm ci

COPY . /home/server1

# RUN yarn && yarn start
RUN yarn
# RUN node ./index.js
# ENTRYPOINT node
# CMD npm install && npm run start
CMD ["yarn", "start"]