import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignupDto } from './dto/signup.dto';

import * as bcryptjs from 'bcryptjs';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp({ name, email, password }: SignupDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    await this.usersService.create({
      name,
      email,
      password: await bcryptjs.hash(password, 10),
    });

    return {
      name,
      email,
    };
  }

  async signIn({ email, password }: SigninDto) {
    const user = await this.usersService.findByEmailWithPassword(email);

    if (!user) {
      throw new UnauthorizedException('Email is wrong');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is wrong');
    }

    const payload = { email: user.email, role: user.role };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
    };
  }

  async profile({ email, role }: { email: string; role: String }) {
    return await this.usersService.findOneByEmail(email);
  }
}
