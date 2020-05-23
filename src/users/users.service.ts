import { CreateUserDto } from './dto/create-user-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './user.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import { createHash } from 'crypto';
import { Role } from 'src/roles/roles.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository : Repository<User>){

    }

    async findAll() : Promise<User[]>{
        return await this.userRepository.find({ relations: ["role"] });
    }

    async create(user : CreateUserDto) : Promise<CreateUserDto> {
    
        user.password = await createHash('md5').update(user.password).digest('hex')
        
        return await this.userRepository.save(user);
    }
    
    async update(user : User) : Promise<UpdateResult> {
        return await this.userRepository.update(user.id,user);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.userRepository.delete(id)
    }

    //'getBooks()' return all the books which are associated with the user 
// provided through 'userID' by the request  
    async getRoleOfUser(roleID: number): Promise<Role> {
        console.log(typeof(roleID));
        const user: User = await this.userRepository.findOne({where: {id: roleID}, relations: ['role']});
        return user.role;
    }
}
