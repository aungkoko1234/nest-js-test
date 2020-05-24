import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTagDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name :string
}