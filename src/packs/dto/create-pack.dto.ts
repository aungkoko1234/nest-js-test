import { IsString, IsNotEmpty,IsNumber } from 'class-validator';

export class CreatePacksDto {
    @IsString()
    @IsNotEmpty()
    name :string
    
    @IsString()
    @IsNotEmpty()
    description :string

    @IsNumber()
    @IsNotEmpty()
    display_order : number

    @IsNumber()
    @IsNotEmpty()
    total_credit : number

    @IsNumber()
    @IsNotEmpty()
    validity_month : number

    @IsNumber()
    @IsNotEmpty()
    price : number

    @IsNumber()
    @IsNotEmpty()
    estimate_price : number

    @IsNumber()
    @IsNotEmpty()
    tagId : number

    @IsNumber()
    @IsNotEmpty()
    typeId : number

    @IsNumber()
    @IsNotEmpty()
    aliasId : number

    @IsNumber()
    @IsNotEmpty()
    newbieId : number
    
}