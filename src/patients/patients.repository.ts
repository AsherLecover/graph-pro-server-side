import { EntityRepository, Repository } from "typeorm";
import { PatientsDto } from "./dto/patients.dto";
import { Patients } from "./patients.entity";


@EntityRepository(Patients)
export class PatientsRepository extends Repository<Patients>{

    async addPatien(patientsDto: PatientsDto): Promise<void>{
        
        const { username, age , address} = patientsDto;

        const patients = new Patients();
        patients.username = username;
        patients.age = age;
        patients.address = address;
        

        await patients.save();
      

    }

   
    

   

}