import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const { name, email, password, address, avatar } = createUserDto;

    return await this.usersService.create({
      name,
      email,
      password,
      address,
      avatar,
    });
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.usersService.findAll();
    if (!users) throw new NotFoundException();

    const usersDto = users.map((user) => {
      const { id, name, email, avatar, address } = user;
      const userDto: UserDto = new UserDto(id, name, email, avatar, address);

      return userDto;
    });

    return usersDto;
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string): Promise<UserDto> {
    const user: User = await this.usersService.findOne(+userId);
    if (!user) throw new NotFoundException();

    const { id, name, email, avatar, address } = user;
    const userDto: UserDto = new UserDto(id, name, email, avatar, address);

    return userDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
