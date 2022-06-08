import { get } from 'https';

async function getPage(url = 'https://www.baidu.com/'): Promise<string> {
  let data = '';
  return new Promise(resolve => {
    get(url, res => {
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });
    });
  });
}

export { getPage };
