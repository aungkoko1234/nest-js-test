import { IsString, IsNotEmpty,IsEmail,IsInt } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name :string
    
    @IsEmail()
    @IsNotEmpty()
    email : string

    @IsNotEmpty()
    password : string
    
    @IsInt()
    roleId : number


}