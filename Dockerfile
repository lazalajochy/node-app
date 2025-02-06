
# Setup Node
FROM node:18-alpine as build

ARG POSTGRES_DB
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD

ENV POSTGRES_DB=$POSTGRES_DB
ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD

# Dependency and Build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# Create JS Build
# RUN npm run build

EXPOSE 3000

CMD ["node", "src/index.js"]