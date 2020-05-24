import { TagService } from './tag.service';
import { Controller,Get,Post,Delete,Put,Body,Param, ParseIntPipe,UseGuards } from '@nestjs/common';
import { ValidationPipe } from './../share/validtion.pipe';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import {Tag} from './tag.entity';
import {CreateTagDto} from './dto/create-tag.dto';

@Controller('tag')
export class TagController {
    constructor(private tagService : TagService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    index() : Promise<Tag[]>{
        return this.tagService.findAll();
    } 
 
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body(new ValidationPipe()) createTagDto: CreateTagDto ){
     return this.tagService.create(createTagDto)
    }
     
    @UseGuards(JwtAuthGuard)
    @Put(':id/update')
    async update(@Param('id') id, @Body() tagData: Tag) : Promise<any> {
      tagData.id = Number(id);
      return this.tagService.update(tagData);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id/delete')
    async delete(@Param('id') id) : Promise<any> {
     return this.tagService.delete(id)
    }

}
