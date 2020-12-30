import { Controller, Get } from '@nestjs/common';
import { MainDataService } from './main-data.service';

@Controller('main-data')
export class MainDataController {

    constructor(private mainDataService: MainDataService){

    }

    @Get('')
    test(){
        return this.mainDataService.test()
    }
}
