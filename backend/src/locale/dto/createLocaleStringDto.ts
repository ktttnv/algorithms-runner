import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateLocaleStringDto {
    @IsString()
    readonly localeLabel: string;

    @IsString()
    readonly value: string;
}