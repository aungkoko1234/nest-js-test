import { Pack } from './packs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PacksService } from './packs.service';
import { PacksController } from './packs.controller';

@Module({
  imports :[
    TypeOrmModule.forFeature([Pack]),
],
  providers: [PacksService],
  controllers: [PacksController],
  exports :[PacksService]
})
export class PacksModule {}
