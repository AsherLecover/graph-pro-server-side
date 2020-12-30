import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp, Unique } from 'typeorm';


@Entity()
export class MainData extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TimeStamp: string;

    @Column()
    State: string;

    @Column()
    rpm: string;

    @Column()
    ObjectDistance: string;

    @Column()
    MovementSlow: string;

    @Column()
    MovementFast: string;

    @Column()
    Algorithm_state: string;

    @Column()
    level_one_start_time: string;

    @Column()
    rpm_average:string;

    @Column()
    average_apnea:string;

    @Column()
    need_to_testing_third_level:string;

    @Column()
    level_three_start_time:string;

    @Column()
    short_rpm_average:string;

    @Column()
    cartridge_is_replace:string;

    @Column()
    relaxed:string  ;

    @Column()
    predict:string;

    @Column()
    signal_quality:string;

    @Column()
    userid:string;


}