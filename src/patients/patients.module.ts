import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsController } from './patients.controller';
import { PatientsRepository } from './patients.repository';
import { PatientsService } from './patients.service';

@Module({
  imports:[TypeOrmModule.forFeature([PatientsRepository])],
  controllers: [PatientsController],
  providers: [PatientsService],

})
export class PatientsModule {}
