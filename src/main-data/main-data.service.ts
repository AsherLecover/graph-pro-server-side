import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainDataRepository } from './main-data.repository';

@Injectable()
export class MainDataService {

    constructor(
        @InjectRepository(MainDataRepository)
        private mainDataRepository: MainDataRepository
    ){}
}
