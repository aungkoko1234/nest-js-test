import { Logging } from './logging.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class LoggingService {
    constructor(@InjectRepository(Logging) private logRepository : Repository<Logging>){}

    async findAll() : Promise<Logging[]>{
        return await this.logRepository.find({ relations: ["user"] });
    }

    async create(log : Logging) : Promise<Logging> {
        return await this.logRepository.save(log);
    }
    
    async delete(id) : Promise<DeleteResult> {
        return await this.logRepository.delete(id)
    }

    async findOne(id) : Promise<Logging>{
        return await this.logRepository.findOne(id)
    }
}
