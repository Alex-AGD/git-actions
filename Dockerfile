FROM node:18-slim as builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production
FROM node:18-slim
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY app.js .
USER node
EXPOSE 8000

CMD ["node", "app.js"]