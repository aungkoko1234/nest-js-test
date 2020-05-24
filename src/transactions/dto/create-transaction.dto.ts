import { IsString, IsNotEmpty,IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTransactionDto{
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId :number

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    packId : string
    promoCodeId :string


}