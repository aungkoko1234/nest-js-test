import { IsString, IsNotEmpty,IsNumber,IsBoolean } from 'class-validator';

export class CreateNewbieDto {
    @IsBoolean()
    @IsNotEmpty()
    newbie_first_attend:boolean

    @IsNumber()
    @IsNotEmpty()
    newbie_addition_credit : number

    @IsString()
    @IsNotEmpty()
    newbie_note : string
}