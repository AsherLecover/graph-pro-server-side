import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { MainDataRepository } from './main-data.repository';

@Injectable()
export class MainDataService {


    constructor(
        @InjectRepository(MainDataRepository)
        private mainDataRepository: MainDataRepository,
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) { }


    async test(patientId) {
        console.log('12121jhgjgjhgjhgj212');
        const query = await this.mainDataRepository.query(`SELECT * FROM "public"."medical-main-data" WHERE user_id = ${patientId}`);
        //  console.log(query);

        //  return query

    }

    async getMedicalDataByParam(patientId: number, param: string, data:string) {
        // SELECT column1, column2, ... 
        // FROM table_name; 
        console.log('patientId service:', patientId);
        console.log('param service:', param);

        //  SELECT "TimeStamp", "State" FROM "public"."medical-main-data";

        const query = await this.mainDataRepository.query(`
        SELECT "TimeStamp", "${param}" FROM "public"."medical-main-data" WHERE user_id = ${patientId}
        AND "TimeStamp" LIKE '${data}%'`);
        console.log(query);

        return query 
    }
}
