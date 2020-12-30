import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { PatientsModule } from './patients/patients.module';
import { MainDataService } from './main-data/main-data.service';
import { MainDataController } from './main-data/main-data.controller';
import { MainDataModule } from './main-data/main-data.module';


@Module({
  imports: [
  
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    AuthModule,
    PatientsModule,
    MainDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
