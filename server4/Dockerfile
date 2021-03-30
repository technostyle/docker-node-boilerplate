FROM node:12.4.0
EXPOSE 3004

WORKDIR /home/server4

# COPY ../app/package.json /home/server3
# COPY yarn.lock /home/server1/

# RUN npm ci

COPY /app /home/server4

# RUN yarn && yarn start
RUN yarn
# RUN node ./index.js
# ENTRYPOINT node
# CMD npm install && npm run start
CMD ["yarn", "start"]