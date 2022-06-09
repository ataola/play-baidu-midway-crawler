import { Controller, Get } from '@midwayjs/decorator';
import { load } from 'cheerio';
import { getPage, packResp } from '../util/index';
import { IPackResp, IHomeData } from '../interface';

// https://midwayjs.org/docs/testing
@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return '<h1>MidWay Demo - Crawler Baidu Index Page Element</h1> \
            <ul> \
              <li><a href="/useRegExp" target="_blank">implement by RegExp</a></li> \
              <li><a href="/useCheerio" target="_blank">implement by npm package - Cheerio</a></li> \
            </ul> \
            <h2>What \'s More</h2> \
            <ul> \
              <li><a href="https://github.com/ataola/play-baidu-midway-crawler">Github Repo</a></li> \
            </ul>';
}

  @Get('/useRegExp')
  async useRegExp(): Promise<IPackResp<IHomeData>> {
    const ret = await getPage();
    // 匹配id为lg的div正则
    const reDivLg = /(?<=<div.*?id="lg".*?>)(.*?)(?=<\/div>)/gi;
    // 匹配img标签的src属性
    const reSrc = /<img.*?src="(.*?)".*?\/?>/i;
    const imgSrc = ret.match(reDivLg)[0].match(reSrc)[1];

    return packResp({ func: 'useRegExp', imgSrc });
  }

  @Get('/useCheerio')
  async useCheerio(): Promise<IPackResp<IHomeData>> {
    const ret = await getPage();
    const $ = load(ret);
    const imgSrc = $('div[id=lg]')
      .children('img')
      .map(function () {
        return $(this).attr('src');
      })
      .get()
      .join(',');

    return packResp({ func: 'useCheerio', imgSrc });
  }
}
