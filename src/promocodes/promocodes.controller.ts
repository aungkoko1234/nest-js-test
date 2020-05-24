import { CreatePromoDto } from './dto/create-promo.dto';
import { ValidationPipe } from './../share/validtion.pipe';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { PromocodesService } from './promocodes.service';
import { Controller, UseGuards, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PromoCode } from './promocodes.entity';

@Controller('promocodes')
export class PromocodesController {
    constructor(private promoService :PromocodesService){

    }
    @UseGuards(JwtAuthGuard)
    @Get()
    index() : Promise<PromoCode[]>{
        return this.promoService.findAll();
    } 
 
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body(new ValidationPipe()) createPromoDto:CreatePromoDto ){
     return this.promoService.create(createPromoDto)
    }
     
    @UseGuards(JwtAuthGuard)
    @Put(':id/update')
    async update(@Param('id') id, @Body() promoData: PromoCode) : Promise<any> {
      promoData.id = String(id);
      return this.promoService.update(promoData);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id/delete')
    async delete(@Param('id') id) : Promise<any> {
     return this.promoService.delete(id)
    }
}
