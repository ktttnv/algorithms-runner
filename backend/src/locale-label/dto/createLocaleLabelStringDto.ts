import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateLocaleLabelStringDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly value: string;
}