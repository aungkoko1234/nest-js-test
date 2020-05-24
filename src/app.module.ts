import { RolesModule } from './roles/roles.module';
import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AliasModule } from './alias/alias.module';
import { TagModule } from './tag/tag.module';
import { TypeModule } from './type/type.module';
import { NewbieModule } from './newbie/newbie.module';
import { PacksModule } from './packs/packs.module';
import { PromocodesModule } from './promocodes/promocodes.module';
import { TransactionsModule } from './transactions/transactions.module';
import { LoggingModule } from './logging/logging.module';


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
    UsersModule,
    AuthModule,
    AliasModule,
    TagModule,
    TypeModule,
    NewbieModule,
    PacksModule,
    PromocodesModule,
    TransactionsModule,
    LoggingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
