import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';

import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor (
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async sign({email, password}: AuthInput): Promise<AuthType> {
    const user = await this.userService.getUserByEmail(email);
    const invalid = !compareSync(password, user.password);

    if(invalid) {
      throw new UnauthorizedException('Authentication failure')
    }

    const token = await this.jwt(user);
    return { user, token };
  }

  private async jwt(user: User): Promise<string> {
    const payload = { username: user.name, sub: user.id };
    return this.jwtService.signAsync(payload);
  }
}
