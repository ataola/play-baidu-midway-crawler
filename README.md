# my_midway_project

## QuickStart

<!-- add docs here for user -->

see [midway docs][midway] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
$ swagger http://127.0.0.1:8090/swagger-ui/index.html
$ swagger http://127.0.0.1:8090/swagger-ui/index.json
```

### Deploy

```bash
$ npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.


### Docker

```shell
docker build -t midway-demo .

docker run -d -p 8090:8090  midway-demo

```


[midway]: https://midwayjs.org
