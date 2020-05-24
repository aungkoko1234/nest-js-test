import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTypeDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name :string
}