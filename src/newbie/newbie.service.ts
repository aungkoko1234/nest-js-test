import { CreateNewbieDto } from './dto/create-newbie';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Newbie } from './newbie.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewbieService {
    constructor(@InjectRepository(Newbie) private newbieRepository : Repository<Newbie>){}

    async findAll() : Promise<Newbie[]>{
        return await this.newbieRepository.find();
    }

    async create(newbie : CreateNewbieDto) : Promise<CreateNewbieDto> {
        return await this.newbieRepository.save(newbie);
    }
    
    async update(newbie : Newbie) : Promise<UpdateResult> {
        return await this.newbieRepository.update(newbie.id,newbie);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.newbieRepository.delete(id)
    }

    async findOne(id) : Promise<Newbie>{
        return await this.newbieRepository.findOne(id)
    }
}
