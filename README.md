# THE ULTIMATE PETS API

## Why?

I'm currently coding this API to learn some concepts about developing APIs in Typescript. The goal is to have an API with some useful functionalities about adopting pets; like posting a pet for adoption, adopting a pet for someone, search for pets by species and genre and some other cool stuff.

## Nice, but what is this developed on?

I am actually using using Node, Typescript and Express for developing this API. For the database, I'm using Mysql and, for writing tests, I will be using Vitest. For last, Swagger is used to make a documentation about this API.
Besides that, the API is coded using TDD and SOLID principles, trying to make a decoupled and testable code.

## How can I run this API?

### Local

The first thing eu need to do is install the dependencies with node:

```
npm install
```

Then, you need to create a MySQL instance, downloading the MySQL driver
or using Docker (I usually use Docker for the database). In this instance,
create a database named "pets" (or any other name that you like.)

After that, you need to create a .env file in the root of the project, with
this information:

```
DATABASE_HOST=""
DATABASE_PORT=""
DATABASE_USERNAME=""
DATABASE_PASSWORD=""
DATABASE_NAME=""
APP_PORT=""
```

Then, you need to create and populate the database. For that, you can run
the following commands:

```
npm run create-database
npm run seed-database
```

After, that, you are ready to go, just run:

```
npm run dev
```

### Docker

You can run this API with Docker too. For that, you can do the follow steps:

First, start the containers:

```
docker compose up -d
```

Then, you need to enter the node container:

```
docker exec -it {place your container id here} /bin/bash
```

Now, you need to create and seed the database

```
npm run create-database
npm run seed-database
```

## Tests

Tests were created for useCases and entities of the project, you can run them
by executing the following command:

```
npm run test
```
