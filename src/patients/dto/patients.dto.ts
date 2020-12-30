import { IsString, MaxLength, MinLength } from "class-validator";

export class PatientsDto {

    @MinLength(2)
    @MaxLength(20)
    @IsString()
    username: string;

    @IsString()
    age: string;


    @IsString()
    address: string;
}