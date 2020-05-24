import { Alias } from './alias.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AliasService } from './alias.service';
import { AliasController } from './alias.controller';

@Module({
  imports :[
    TypeOrmModule.forFeature([Alias]),
],
  providers: [AliasService],
  controllers: [AliasController]
})
export class AliasModule {}
