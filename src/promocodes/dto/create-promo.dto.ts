import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty,IsNumber,IsUppercase } from 'class-validator';

export class CreatePromoDto{
    @IsString()
    @IsNotEmpty()
    @IsUppercase()
    @ApiProperty()
    code :string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    discount :number
}