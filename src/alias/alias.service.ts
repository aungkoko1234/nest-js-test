import { Injectable } from '@nestjs/common';
import {Alias} from './alias.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateAliasDto} from './dto/create-alias.dto';
import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class AliasService {
    constructor(@InjectRepository(Alias) private aliasRepository : Repository<Alias>){}


    async findAll() : Promise<Alias[]>{
        return await this.aliasRepository.find();
    }

    async create(alias : CreateAliasDto) : Promise<CreateAliasDto> {
        return await this.aliasRepository.save(alias);
    }
    
    async update(alias : Alias) : Promise<UpdateResult> {
        return await this.aliasRepository.update(alias.id,alias);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.aliasRepository.delete(id)
    }

    async findOne(id) : Promise<Alias>{
        return await this.aliasRepository.findOne(id)
    }
}
