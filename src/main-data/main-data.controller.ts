import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MainDataService } from './main-data.service';

@Controller('main-data')
export class MainDataController {

    constructor(private mainDataService: MainDataService) {

    }

    @Get('')
    test() {
        // return this.mainDataService.test()
    }

    @Get('/:patientId')
    async getUserMedicalData(
        @Param('patientId', ParseIntPipe) patientId: number
    ) {
        console.log('patientId', patientId);

        return await this.mainDataService.test(patientId)
    }

    @Get('/:patientId/:param')
    async getUserMedicalDataByParam(
        @Param('patientId', ParseIntPipe) patientId: number,
        @Param('param') param: string,
    ) {
        console.log('patientId controler:', patientId);
        console.log('param controler:', param);


        return await this.mainDataService.getMedicalDataByParam(patientId, param)
    }
}
