import { IsString, IsNotEmpty,IsNumber,IsUppercase } from 'class-validator';

export class CreatePromoDto{
    @IsString()
    @IsNotEmpty()
    @IsUppercase()
    code :string

    @IsNumber()
    @IsNotEmpty()
    discount :number
}