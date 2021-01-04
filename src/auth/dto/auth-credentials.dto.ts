import { IsString, Matches, MaxLength, MinLength, IsEmail } from "class-validator";

export class AuthCredentialsDto {

    // @MinLength(2)
    // @MaxLength(20)
    // @IsString()
    username: string;

    // @IsEmail()
    email: string;

    // @MinLength(4)
    // @MaxLength(20)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password pattern is too week'} )
    // @IsString()
    password: string;
}

export class AuthCredentialsDtoSignin {

    // @IsEmail()
    email: string;
  
    // @IsString()
    // @MinLength(6)
    // @MaxLength(20)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password must have at least one uppercase letter, a lowercase a number, and a special character' })
    password: string;
  
   
  
  }