import { CreateNewbieDto } from './dto/create-newbie';
import { ValidationPipe } from './../share/validtion.pipe';
import { Newbie } from './newbie.entity';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { NewbieService } from './newbie.service';
import { Controller, Get, Post, Delete, Put, UseGuards, Body, Param } from '@nestjs/common';

@Controller('newbie')
export class NewbieController {
    constructor(private newbieService : NewbieService){

    }
    @UseGuards(JwtAuthGuard)
    @Get()
    index() : Promise<Newbie[]>{
        return this.newbieService.findAll();
    } 
 
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body(new ValidationPipe()) createNewbieDto: CreateNewbieDto ){
     return this.newbieService.create(createNewbieDto)
    }
     
    @UseGuards(JwtAuthGuard)
    @Put(':id/update')
    async update(@Param('id') id, @Body() newbieData: Newbie) : Promise<any> {
      newbieData.id = Number(id);
      return this.newbieService.update(newbieData);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id/delete')
    async delete(@Param('id') id) : Promise<any> {
     return this.newbieService.delete(id)
    }
}
