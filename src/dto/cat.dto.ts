import { ApiProperty } from '@midwayjs/swagger';
export enum HelloWorld {
  One = 'One',
  Two = 'Two',
  Three = 'Three',
}

export class CreateCatDto {
  @ApiProperty({
    example: 'Kitty',
    description: 'The name of the Cat',
  })
  name: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    example: '18',
    description: 'The age of the Cat',
  })
  age: number;
  @ApiProperty({
    enum: ['One', 'Two', 'Three'],
    description: 'The name of the Catage',
  })
  hello: HelloWorld;
}

export class Cat {
  id: number;
  name: string;
  age: number;
  hello: HelloWorld;
}
