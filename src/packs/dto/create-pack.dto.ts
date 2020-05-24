import { IsString, IsNotEmpty,IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePacksDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name :string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description :string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    display_order : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    total_credit : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    validity_month : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    estimate_price : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    tagId : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    typeId : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    aliasId : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    newbieId : number
    
}