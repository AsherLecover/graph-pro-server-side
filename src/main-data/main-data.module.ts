import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { MainDataController } from './main-data.controller';
import { MainDataRepository } from './main-data.repository';
import { MainDataService } from './main-data.service';

@Module({

    imports:[TypeOrmModule.forFeature([MainDataRepository, UserRepository])],
    controllers: [MainDataController],
    providers:[MainDataService]
})
export class MainDataModule {}
