import { ValidationPipe } from './../share/validtion.pipe';
import { Role} from './roles.entity';
import { Controller,Get,Post,Delete,Put,Body,Param} from '@nestjs/common';
import {RolesService} from './roles.service';
import {CreateRoleDto} from './dto/create-role.dto'

@Controller('roles')
export class RolesController {

constructor(private roleService : RolesService){

}    

@Get()
index() : Promise<Role[]>{
    return this.roleService.findAll();
}

@Post()
async create(@Body(new ValidationPipe()) createRoleDto: CreateRoleDto){
    return this.roleService.create(createRoleDto)

//   return "Type are OKay";
}

@Put(':id/update')
async update(@Param('id') id, @Body() roleData: Role) : Promise<any> {
  roleData.id = Number(id);
  return this.roleService.update(roleData);
}

@Delete(':id/delete')
async delete(@Param('id') id) : Promise<any> {
    return this.roleService.delete(id)
}



}
