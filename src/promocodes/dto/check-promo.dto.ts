import { ApiProperty } from '@nestjs/swagger';
import { IsString,IsUppercase } from 'class-validator';

export class CheckPromoDto {
    @IsString()
    @IsUppercase()
    @ApiProperty()
    code :string
}
