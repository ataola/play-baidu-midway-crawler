import { ApiProperty } from '@midwayjs/swagger';

export class UserDTO {
  @ApiProperty()
  name: string;
}
