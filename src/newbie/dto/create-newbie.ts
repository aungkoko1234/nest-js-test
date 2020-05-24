import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty,IsNumber,IsBoolean } from 'class-validator';

export class CreateNewbieDto {
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    newbie_first_attend:boolean

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    newbie_addition_credit : number

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    newbie_note : string
}