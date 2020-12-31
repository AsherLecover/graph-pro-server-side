import { IsString, Matches, MaxLength, MinLength, IsEmail } from "class-validator";

export class AuthCredentialsDto {

    
    username: string;

    email: string;

    password: string;
}

export class AuthCredentialsDtoSignin {

    email: string;
  
    password: string;
  
   
  
  }
  