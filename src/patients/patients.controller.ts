import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PatientsDto } from './dto/patients.dto';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {

    constructor(private patientsService:PatientsService){}


    @Post('')
    addPatien(@Body(ValidationPipe) patientsDto: PatientsDto):Promise<void>{
        console.log('authCredentialsDto: (from controller..)',patientsDto);
        return this.patientsService.addPatien(patientsDto);
    }

}
