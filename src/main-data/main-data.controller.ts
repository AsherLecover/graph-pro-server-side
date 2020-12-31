import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MainDataService } from './main-data.service';

@Controller('main-data')
export class MainDataController {

    constructor(private mainDataService: MainDataService){

    }

    @Get('')
    test(){
        // return this.mainDataService.test()
    }

    @Get('/:patientId')
    async getUserMedicalData(
        @Param('patientId',ParseIntPipe) patientId: number
    ){
        console.log('patientId', patientId);

         return  await this.mainDataService.test(patientId)
    }
}
