export class UserDto {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  address?: string;

  constructor(
    id: number,
    name: string,
    email: string,
    avatar?: string,
    address?: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar;
    this.address = address;
  }
}
