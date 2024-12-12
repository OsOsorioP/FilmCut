import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { Request } from 'express';
import { Role } from '../common/enums/rol.enum';
import { Auth } from '../common/decorators/auth.decorator';
import { ActiveUser } from '../common/decorators/active.user.decorator';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';

interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(
    @Body()
    singupDto: SignupDto,
  ) {
    return this.authService.signUp(singupDto);
  }

  @Post('singin')
  signIn(
    @Body()
    signinDto: SigninDto,
  ) {
    return this.authService.signIn(signinDto);
  }

  @Get('profile')
  @Auth(Role.USER)
  profile(@ActiveUser() user:UserActiveInterface) {
    return this.authService.profile(user)
  }
}
