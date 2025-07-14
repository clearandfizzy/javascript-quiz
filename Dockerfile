FROM node:20-alpine

RUN apk add --no-cache bash nodejs npm openjdk11-jre
RUN npm	install -g npm
RUN npm install -g firebase-tools

WORKDIR /app

RUN echo "alias ll='ls -alh'" >> /root/.bashrc
RUN echo "alias netlify='/app/node_modules/.bin/netlify'" >> /root/.bashrc

CMD ["bash"]
