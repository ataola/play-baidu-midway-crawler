import { Provide } from '@midwayjs/decorator';
import { CreateCatDto, Cat, HelloWorld, createFileDto } from '../dto/cat.dto';

@Provide()
export class CatService {
  async createCat(options: CreateCatDto): Promise<Cat> {
    return {
      id: Math.random(),
      ...options,
    };
  }

  async createFile(options: createFileDto): Promise<createFileDto> {
    return options;
  }

  async findOne(id: number): Promise<Cat> {
    return {
      id,
      name: '大黄',
      age: 18,
      hello: HelloWorld[0],
    };
  }
}
