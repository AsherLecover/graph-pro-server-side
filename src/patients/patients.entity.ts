import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity()
export class Patients extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    age: string;

    @Column()
    address: string;

}