import { CreatePacksDto } from './dto/create-pack.dto';
import { Pack } from './packs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PacksService {
    constructor(@InjectRepository(Pack) private packRepository : Repository <Pack>){

    }

    async findAll() : Promise<Pack[]>{
        return await this.packRepository.find({ relations: ["tag","type","alias","newbie"] });
    }

    async create(pack : CreatePacksDto) : Promise<CreatePacksDto> {
        return await this.packRepository.save(pack);
    }
    
    async update(pack : Pack) : Promise<UpdateResult> {
        return await this.packRepository.update(pack.id,pack);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.packRepository.delete(id)
    }

    async findOne(id) : Promise<Pack>{
        return await this.packRepository.findOne(id)
    }
}
