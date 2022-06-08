import { Controller, Get } from '@midwayjs/decorator';
import { load } from 'cheerio';
import { getPage } from '../util/index';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }

  @Get('/useRegExp')
  async useRegExp(): Promise<any> {
    const ret = await getPage();
    const reDivLg = /(?<=<div.*?id="lg".*?>)(.*?)(?=<\/div>)/gi;
    const reImg = /<img\b.*?(?:>|\/>)/gi;
    const reSrc = /<img.*?src="(.*?)".*?\/?>/i;
    const imgArr = ret.match(reDivLg)[0].match(reImg);
    const imgSrc = imgArr.map(item => item.match(reSrc)[1]).join(',');
    return { func: 'useRegExp', imgSrc };
  }

  @Get('/useCheerio')
  async useCheerio(): Promise<any> {
    const ret = await getPage();
    const $ = load(ret);
    const imgSrc = $('div[id=lg]')
      .children('img')
      .map(function () {
        return $(this).attr('src');
      })
      .get()
      .join(',');
    return {
      func: 'useCheerio',
      imgSrc,
    };
  }
}
