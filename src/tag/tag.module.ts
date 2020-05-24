import { Tag } from './tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';

@Module({
  imports :[
    TypeOrmModule.forFeature([Tag]),
],
  providers: [TagService],
  controllers: [TagController]
})
export class TagModule {}
