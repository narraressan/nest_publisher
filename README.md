# Simple Subscriber with Nest

This project is a showcase of my expertise in back-end development using NestJS. It demonstrates a simple subscriber service to receive data from Redis queue useful for a Message-driven architecture.

### Dependencies

- [NestJs](https://docs.nestjs.com/) using `@nestjs/cli`
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/)

Note: run [nest_api](https://github.com/narraressan/nest_api) and execute sample tests on `PUT /publish` API

### Execution

```bash
yarn install
docker-compose up redis -d
yarn dev
yarn test
```

### Dockerize

```bash
docker build --file ./dockerfile --tag [image_name]:[version] . --no-cache --progress=plain

# Publish image to registry
# login using specific user docker login docker.io -u username -p password
docker login docker.io
docker push [username]/[image_name]:[version]
docker logout
```

### TODO
