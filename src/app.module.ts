import { RolesModule } from './roles/roles.module';
import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sell_packs',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    RolesModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
