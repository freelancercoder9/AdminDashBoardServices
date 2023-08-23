FROM node:20.5.1-slim
RUN mkdir front-end
COPY . ./front-end/
COPY package.json package-lock.json ./front-end/
WORKDIR front-end
RUN echo pwd
RUN npm install
RUN npm run build
ENTRYPOINT ["tail", "-f", "/dev/null"]
