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


    async test() {
        const query = await this.mainDataRepository.query(`SELECT * FROM "public"."medical-main-data" WHERE user_id = 6`);
        return query


    }
}
