import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Controller, Get,UseGuards,Post,Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service'
import {LocalAuthGuard} from './auth/local-auth.guard'
@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return  this.authService.login(req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
