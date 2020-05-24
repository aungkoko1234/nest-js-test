import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret : jwtConstants.secret,
      signOptions :{ expiresIn: '24h' },
    })
  ],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports : [AuthService]
})
export class AuthModule {}