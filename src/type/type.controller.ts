import { TypeService } from './type.service';
import { Controller,Get,Post,Delete,Put,Body,Param, ParseIntPipe,UseGuards } from '@nestjs/common';
import { ValidationPipe } from './../share/validtion.pipe';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import {Type} from './type.entity';
import {CreateTypeDto} from './dto/create-type.dto'

@Controller('type')
export class TypeController {
    constructor(private typeService: TypeService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    index() : Promise<Type[]>{
        return this.typeService.findAll();
    } 
 
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body(new ValidationPipe()) createTypeDto: CreateTypeDto ){
     return this.typeService.create(createTypeDto)
    }
     
    @UseGuards(JwtAuthGuard)
    @Put(':id/update')
    async update(@Param('id') id, @Body() typeData: Type) : Promise<any> {
      typeData.id = Number(id);
      return this.typeService.update(typeData);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id/delete')
    async delete(@Param('id') id) : Promise<any> {
     return this.typeService.delete(id)
    }

}
