import { IsString, IsNotEmpty,IsEmail,IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name :string
    
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email : string

    @IsNotEmpty()
    @ApiProperty()
    password : string
    
    @IsInt()
    @ApiProperty()
    roleId : number


}