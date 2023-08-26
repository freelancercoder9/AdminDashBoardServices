FROM node:alpine
WORKDIR /front-end
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
ENV PORT 3000
CMD ["npm", "run", "start"]