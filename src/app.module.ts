import { Module } from '@nestjs/common';
import { PetsController } from './pets/pets.controller';
import { PetsModule } from './pets/pets.module';
import { PetsService } from './pets/pets.service';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [PetsModule, UsersModule],
  controllers: [PetsController, UsersController],
  providers: [PetsService, UsersService, PrismaService],
})
export class AppModule {}
