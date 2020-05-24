import { Newbie } from './newbie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NewbieService } from './newbie.service';
import { NewbieController } from './newbie.controller';

@Module({
  imports :[
    TypeOrmModule.forFeature([Newbie]),
],
  providers: [NewbieService],
  controllers: [NewbieController]
})
export class NewbieModule {}
