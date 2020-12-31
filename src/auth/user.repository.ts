import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { AuthCredentialsDto, AuthCredentialsDtoSignin } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<any>{
        console.log(987098790);
        
        const { username, email, password} = authCredentialsDto;

        
        const user = new User();
        user.username = username;
        user.email = email;
        user.salt = await bcrypt.genSalt()
        user.password = await this.HashPassword(password, user.salt);
        
        
        try {
           return await user.save();

        } catch (error) {

            console.log(error.code);
            if (error.code == '23505') {
                throw new ConflictException('מייל זה קיים כבר במערכת')

            } else {
                console.log(error);
                
                throw new InternalServerErrorException();
            }
        }
       
        
    }

    async validateUserPassword(authCredentialsDtoSignin: AuthCredentialsDtoSignin): Promise<string>{
        const { email, password} = authCredentialsDtoSignin;
        const user = await this.findOne({email});

        if(user && await user.validatePassword(password)){
            return user.username;
        }
        else{
            return null;
        } 
    }

    private async HashPassword(password: string, salt: string):Promise<string> {
        return bcrypt.hash(password, salt);
    }


}