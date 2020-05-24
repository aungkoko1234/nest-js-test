import { CreatePacksDto } from './dto/create-pack.dto';
import { Pack } from './packs.entity';
import { ValidationPipe } from './../share/validtion.pipe';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { PacksService } from './packs.service';
import { Controller, UseGuards, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('packs')
export class PacksController {
    constructor(private packsService : PacksService){}
    @UseGuards(JwtAuthGuard)
    @Get()
    index() : Promise<Pack[]>{
        return this.packsService.findAll();
    } 
 
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body(new ValidationPipe()) createPackDto:CreatePacksDto ){
     return this.packsService.create(createPackDto)
    }
     
    @UseGuards(JwtAuthGuard)
    @Put(':id/update')
    async update(@Param('id') id, @Body() packData: Pack) : Promise<any> {
      packData.id = String(id);
      return this.packsService.update(packData);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id/delete')
    async delete(@Param('id') id) : Promise<any> {
     return this.packsService.delete(id)
    }
}
