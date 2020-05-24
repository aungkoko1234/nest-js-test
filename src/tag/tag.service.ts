import { Injectable } from '@nestjs/common';
import {Tag} from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateTagDto} from './dto/create-tag.dto';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class TagService {
    constructor(@InjectRepository(Tag) private tagRepository : Repository<Tag>){

    }
    async findAll() : Promise<Tag[]>{
        return await this.tagRepository.find();
    }

    async create(tag : CreateTagDto) : Promise<CreateTagDto> {
        return await this.tagRepository.save(tag);
    }
    
    async update(tag : Tag) : Promise<UpdateResult> {
        return await this.tagRepository.update(tag.id,tag);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.tagRepository.delete(id)
    }

    async findOne(id) : Promise<Tag>{
        return await this.tagRepository.findOne(id)
    }
}
