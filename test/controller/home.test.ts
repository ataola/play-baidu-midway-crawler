import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';
import { deepStrictEqual, notDeepStrictEqual } from 'assert';
import { IPackResp, IHomeData } from '../../src/interface';

describe('test/controller/home.test.ts', () => {
  let app: Application;

  beforeAll(async () => {
    // 只创建一次 app，可以复用
    try {
      // 由于Jest在BeforeAll阶段的error会忽略，所以需要包一层catch
      // refs: https://github.com/facebook/jest/issues/8688
      app = await createApp<Framework>();
    } catch (err) {
      console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    // close app
    await close(app);
  });

  // it('should GET /', async () => {
  //   // make request
  //   const result = await createHttpRequest(app).get('/');

  //   // use expect by jest
  //   expect(result.status).toBe(200);
  //   expect(result.text).toBe('Hello Midwayjs!');
  // });

  it.only('should GET /useRegExp', async () => {
    const startTime = Date.now();
    // make request
    const result: any = await createHttpRequest(app).get('/useRegExp');
    const cost = Date.now() - startTime;

    // 2. 如果接口请求时间超过1秒钟，则Assert断言失败
    const {
      data: { imgSrc },
    } = result.body as IPackResp<IHomeData>;

    expect(imgSrc).not.toBe('//www.baidu.com/img/bd_logo1.png');
    notDeepStrictEqual(imgSrc, '//www.baidu.com/img/bd_logo1.png');
    expect(cost).toBeLessThanOrEqual(1000);
    expect(imgSrc).toBe('//www.baidu.com/img/flexible/logo/pc/index.png');
    deepStrictEqual(imgSrc, '//www.baidu.com/img/flexible/logo/pc/index.png');
  });

  it.only('should GET /useCheerio', async () => {
    const startTime = Date.now();
    // make request
    const result: any = await createHttpRequest(app).get('/useCheerio');
    const cost = Date.now() - startTime;

    const {
      data: { imgSrc },
    } = result.body as IPackResp<IHomeData>;

    expect(imgSrc).not.toBe('//www.baidu.com/img/bd_logo1.png');
    notDeepStrictEqual(imgSrc, '//www.baidu.com/img/bd_logo1.png');
    expect(cost).toBeLessThanOrEqual(1000);
    expect(imgSrc).toBe('//www.baidu.com/img/flexible/logo/pc/index.png');
    deepStrictEqual(imgSrc, '//www.baidu.com/img/flexible/logo/pc/index.png');
  });
});
