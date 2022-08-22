import { UserDto } from './user-dto';

export class UserAuthDto extends UserDto {
  password: string;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    avatar?: string,
    address?: string,
  ) {
    super(id, name, email, avatar, address);
    this.password = password;
  }
}
