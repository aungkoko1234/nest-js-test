import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PromocodesService } from './promocodes.service';
import { PromocodesController } from './promocodes.controller';
import { PromoCode } from './promocodes.entity';

@Module({
  imports :[
    TypeOrmModule.forFeature([PromoCode]),
],
  providers: [PromocodesService],
  controllers: [PromocodesController],
  exports : [PromocodesService]
})
export class PromocodesModule {}
