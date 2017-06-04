FROM node
COPY . /code
RUN cd /code && npm install
ENV PATH="/code/node_modules/.bin:${PATH}"
WORKDIR /code
