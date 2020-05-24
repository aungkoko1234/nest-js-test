import { AliasService } from './alias.service';
import { Controller,Get,Post,Delete,Put,Body,Param, ParseIntPipe,UseGuards } from '@nestjs/common';
import {Alias} from './alias.entity';
import {CreateAliasDto} from  './dto/create-alias.dto';
import { ValidationPipe } from './../share/validtion.pipe';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';


@Controller('alias')
export class AliasController {
   constructor(private aliasService : AliasService){}

   @UseGuards(JwtAuthGuard)
   @Get()
   index() : Promise<Alias[]>{
       return this.aliasService.findAll();
   } 

   @UseGuards(JwtAuthGuard)
   @Post()
   async create(@Body(new ValidationPipe()) createAliasDto:CreateAliasDto ){
    return this.aliasService.create(createAliasDto)
   }
    
   @UseGuards(JwtAuthGuard)
   @Put(':id/update')
   async update(@Param('id') id, @Body() aliasData: Alias) : Promise<any> {
     aliasData.id = Number(id);
     return this.aliasService.update(aliasData);
   }
   
   @UseGuards(JwtAuthGuard)
   @Delete(':id/delete')
   async delete(@Param('id') id) : Promise<any> {
    return this.aliasService.delete(id)
   }
}
