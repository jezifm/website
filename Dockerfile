FROM node
COPY . /code
RUN cd /code && npm install
RUN cp -r /code/node_modules /usr/local/lib/
ENV PATH="${PATH}:/usr/local/lib/node_modules/.bin"
WORKDIR /code
