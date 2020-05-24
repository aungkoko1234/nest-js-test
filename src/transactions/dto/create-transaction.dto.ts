import { IsString, IsNotEmpty,IsNumber } from 'class-validator';

export class CreateTransactionDto{
    @IsNumber()
    @IsNotEmpty()
    userId :number

    @IsString()
    @IsNotEmpty()
    packId : string
    promoCodeId :string


}