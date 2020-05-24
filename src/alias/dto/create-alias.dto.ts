import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAliasDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name :string
}