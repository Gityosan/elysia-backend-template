FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY src src
COPY tsconfig.json .
COPY drizzle.config.ts .

CMD ["bun", "start"]

EXPOSE 3010