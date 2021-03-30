FROM node:12.4.0
EXPOSE 3001

# WORKDIR /home/server1

# COPY package.json /home/server1/
# COPY package-lock.json /home/server1/

# RUN npm ci

COPY . /home/server2

# RUN npm install
ENTRYPOINT node index.js