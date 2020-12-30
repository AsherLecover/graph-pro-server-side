import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsDto } from './dto/patients.dto';
import { PatientsRepository } from './patients.repository';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository) {}

   async addPatien(patientsDto:PatientsDto){
        return await this.patientsRepository.addPatien(patientsDto);

    }
}
