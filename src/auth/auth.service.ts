import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    console.log(user);
    if (user && user.password === pass) {
      // TO-DO - salvar o password como hash e compara-lo aqui, usando bcrypt
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
