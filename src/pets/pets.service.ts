import { Injectable } from '@nestjs/common';
import { Pet, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PetCreateInput): Promise<Pet> {
    return this.prisma.pet.create({
      data,
    });
  }

  findAll(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PetWhereUniqueInput;
    where?: Prisma.PetWhereInput;
    orderBy?: Prisma.PetOrderByWithRelationInput;
  }): Promise<Pet[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pet.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: any) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
