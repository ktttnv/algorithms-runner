import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateGroupDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly displayName: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly name: string;
}