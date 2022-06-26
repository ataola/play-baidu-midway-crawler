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

docker run --privileged -itd -p 7001:7001  --name midway midway-demo
```


```
科大镜像：https://docker.mirrors.ustc.edu.cn/
网易：https://hub-mirror.c.163.com/
阿里云：https://cr.console.aliyun.com/
七牛云加速器：https://reg-mirror.qiniu.com
腾讯云：https://mirrors.css.tencentyun.com
```


[midway]: https://midwayjs.org
