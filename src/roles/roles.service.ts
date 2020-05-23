import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.entity';
import {CreateRoleDto} from './dto/create-role.dto';
import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role)
    private roleRepository: Repository<Role>) {
       
    }

    async findAll() : Promise<Role[]>{
        return await this.roleRepository.find();
    }

    async create(role : CreateRoleDto) : Promise<CreateRoleDto> {
        return await this.roleRepository.save(role);
    }
    
    async update(role : Role) : Promise<UpdateResult> {
        return await this.roleRepository.update(role.id,role);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.roleRepository.delete(id)
    }

    async findOne(id) : Promise<Role>{
        return await this.roleRepository.findOne(id)
    }
}
