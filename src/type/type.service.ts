import { Injectable } from '@nestjs/common';
import {Type} from './type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateTypeDto} from './dto/create-type.dto';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class TypeService {
    constructor(@InjectRepository(Type) private typeRepository : Repository<Type>){}
    async findAll() : Promise<Type[]>{
        return await this.typeRepository.find();
    }

    async create(type : CreateTypeDto) : Promise<CreateTypeDto> {
        return await this.typeRepository.save(type);
    }
    
    async update(type : Type) : Promise<UpdateResult> {
        return await this.typeRepository.update(type.id,type);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.typeRepository.delete(id)
    }

    async findOne(id) : Promise<Type>{
        return await this.typeRepository.findOne(id)
    }
}
