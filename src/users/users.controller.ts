import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { Controller,Get,Post,Delete,Put,Body,Param, ParseIntPipe,UseGuards} from '@nestjs/common';
import { ValidationPipe } from './../share/validtion.pipe';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){

    }    
    @UseGuards(JwtAuthGuard)
    @Get()
    index() : Promise<User[]>{
        return this.userService.findAll();
    }
    
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    
    //   return "Type are OKay";
    }
    
    @UseGuards(JwtAuthGuard)
    @Put(':id/update')
    async update(@Param('id') id, @Body() roleData: User) : Promise<any> {
      roleData.id = Number(id);
      return this.userService.update(roleData);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id/delete')
    async delete(@Param('id') id) : Promise<any> {
        return this.userService.delete(id)
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('role')
    getBooks( @Body('roleId', ParseIntPipe) roleId: number ) {
      return this.userService.getRoleOfUser(roleId)
    }
    
}
