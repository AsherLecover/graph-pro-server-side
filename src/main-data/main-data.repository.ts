import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { MainDataDto } from "./dto/main-data.dto";
import { MainData } from "./main-data.entity";



@EntityRepository(MainData)
export class MainDataRepository extends Repository<MainData>{

 



   

}