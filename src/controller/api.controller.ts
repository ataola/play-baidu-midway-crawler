import {
  Inject,
  Controller,
  Get,
  Query,
  Post,
  Body,
  Param,
  File,
  Fields,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { CreateCatDto, Cat, createFileDto } from '../dto/cat.dto';
import { UserDTO } from '../dto/user.dto';
import { CatService } from '../service/cat.service';
import {
  ApiQuery,
  ApiTags,
  ApiResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiBody,
  BodyContentType,
} from '@midwayjs/swagger';

// @ApiHeader({
//   name: 'Authorization',
//   description: '示例值： Bearer {{TOKEN}},说明：token',
// })
@ApiTags(['API'])
@ApiBearerAuth()
@Controller('/api', { description: '用户账号信息相关，需要登录' })
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  catService: CatService;

  // Swagger 组件会识别各个 @Controller 中每个路由方法的 @Body()、@Query()、@Param() 装饰器，提取路由方法参数和类型。
  @Get('/get_user')
  @ApiOperation({
    description: '获取用户啊',
    summary: '获取用户',
  })
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Get('/get_users')
  @ApiQuery({
    name: 'query',
  })
  async getUsers(@Query() dto: UserDTO) {
    return { success: true, message: 'OK', data: dto };
  }

  @Post('/cats:id', {
    summary: 'Main Page',
    description: 'This is a cat router',
  })
  async create(
    @Body() createCatDto: CreateCatDto,
    @Param('id') id: number
  ): Promise<Cat> {
    return this.catService.createCat(createCatDto);
  }

  @Get('/cat:id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Cat,
  })
  findOne(@Param('id') id: number, @Query('test') test: any): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Post('/upload:id', { summary: 'test' })
  @ApiBody({
    description: 'this is body',
    contentType: BodyContentType.Multipart,
  })
  async createFile(@Body() cf: createFileDto): Promise<createFileDto> {
    return this.catService.createFile(cf);
  }

  @Post('/test')
  @ApiBody({ description: 'hello file' })
  @ApiBody({ description: 'hello fields', type: Cat })
  async upload(@File() f: any, @Fields() data: Cat) {
    return null;
  }
}
