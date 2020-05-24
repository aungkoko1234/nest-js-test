import { TypeOrmModule } from '@nestjs/typeorm';
import { Logging } from './logging.entity';
import { Module } from '@nestjs/common';
import { LoggingService } from './logging.service';
import { LoggingController } from './logging.controller';

@Module({
  imports :[
    TypeOrmModule.forFeature([Logging]),
  ],
  providers: [LoggingService],
  controllers: [LoggingController],
  exports : [LoggingService]
})
export class LoggingModule {}
