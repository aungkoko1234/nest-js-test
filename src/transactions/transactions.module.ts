import { LoggingModule } from './../logging/logging.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transactions.entity';
import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { PromocodesModule } from 'src/promocodes/promocodes.module';
import { PacksModule } from 'src/packs/packs.module';

@Module({
  imports :[
    TypeOrmModule.forFeature([Transaction]),
    PromocodesModule,
    PacksModule,
    LoggingModule,
],
  providers: [TransactionsService],
  controllers: [TransactionsController]
})
export class TransactionsModule {}
