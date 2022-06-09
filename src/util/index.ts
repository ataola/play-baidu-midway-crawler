import { get } from 'https';
import { IPackResp } from '../interface';

async function getPage(url = 'https://www.baidu.com/'): Promise<string> {
  let data = '';
  return new Promise((resolve, reject) => {
    get(url, res => {
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('error', err => reject(err));

      res.on('end', () => {
        resolve(data);
      });
    });
  });
}

function packResp<T>(data: T, success = true, message = 'ok'): IPackResp<T> {
  return {
    data,
    success,
    message,
  };
}

export { getPage, packResp };
