import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainDataRepository } from './main-data.repository';

@Injectable()
export class MainDataService {


    constructor(
        @InjectRepository(MainDataRepository)
        private mainDataRepository: MainDataRepository,
     
    ) { }


    async test(patientId) {
        const query = await this.mainDataRepository.query(`SELECT * FROM "public"."medical-main-data" WHERE user_id = ${patientId}`);
      

    }

    async getMedicalDataByParam(patientId: number, param: string, data:string) {
      
        console.log('patientId service:', patientId);
        console.log('param service:', param);


        const query = await this.mainDataRepository.query(`
        SELECT "TimeStamp", "${param}" FROM "public"."medical-main-data" WHERE user_id = ${patientId}
        AND "TimeStamp" LIKE '${data}%'`);
        console.log(query);

        return query 
    }
}
