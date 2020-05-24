import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAliasDto {
    @IsString()
    @IsNotEmpty()
    name :string
}