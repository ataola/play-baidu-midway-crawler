import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1654699615137_8391',
  koa: {
    port: 7001,
  },
  swagger: {
    title: '瞎搞的，做调研用',
    description: '我说了这是个瞎搞的',
    version: '1.0.0',
    contact: {
      name: '郑江涛',
      url: 'https://zhengjiangtao.cn',
      email: 'zjt613@gmail.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
    tagSortable: true,
    auth: {
      // 我们支持配置 basic、bearer、cookie、oauth2、apikey、custom。
      authType: 'bearer',
    },
  },
} as MidwayConfig;
