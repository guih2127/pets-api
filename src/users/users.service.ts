import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserAuthDto } from './dto/user-auth-dto';
import { UserDto } from './dto/user-dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<UserDto[]> {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        address: true,
        avatar: true,
      },
    });
  }

  async findByEmail(email: string): Promise<UserAuthDto> {
    return await this.prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        address: true,
        avatar: true,
        password: true,
      },
    });
  }

  async findOne(userId: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id: userId } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
