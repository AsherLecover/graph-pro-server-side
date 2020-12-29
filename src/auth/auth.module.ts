import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStategy } from './jwt.stategy';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: 'topSecret51', signOptions: { expiresIn: 3600 } }),
    TypeOrmModule.forFeature([UserRepository])


  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStategy],
    exports:[
      JwtStategy,
      PassportModule]
})
export class AuthModule {}
