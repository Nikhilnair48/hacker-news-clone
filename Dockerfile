FROM node:latest

RUN useradd -ms /bin/bash itsnikhilnair

RUN chown -R itsnikhilnair /home

USER itsnikhilnair

RUN mkdir -p /home/itsnikhilnair/hacker-news-clone

RUN mkdir -p /home/itsnikhilnair/hacker-news-clone/node_modules

WORKDIR /home/itsnikhilnair/hacker-news-clone

COPY package*.json ./

COPY .babelrc ./

# TO DO: COMMENT THIS BEFORE GIT CHECKTIN
ADD node_modules /home/itsnikhilnair/hacker-news-clone/node_modules
# TO DO: UNCOMMENT THIS BEFORE GIT CHECKTIN
# RUN npm install

ADD src /home/itsnikhilnair/hacker-news-clone/src

ADD public /home/itsnikhilnair/hacker-news-clone/public

ADD webpack.config.js /home/itsnikhilnair/hacker-news-clone/

EXPOSE 8080

CMD [ "npm", "start" ]
