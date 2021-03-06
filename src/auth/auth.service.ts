import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto, AuthCredentialsDtoSignin } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload-interface';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsDtoSignin: AuthCredentialsDtoSignin): Promise< {accessToken: string}> {
    const username = await this.userRepository.validateUserPassword(
      authCredentialsDtoSignin,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid credntials');
      console.log('sginIn user: ', username);
    }
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }
}
