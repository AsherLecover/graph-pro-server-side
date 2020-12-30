import { IsString, Matches, MaxLength, MinLength, IsEmail } from "class-validator";
import { Timestamp } from "typeorm";

export class MainDataDto {

    TimeStamp: Timestamp;

    State: string;

    rpm: string;

    ObjectDistance: string;

    MovementSlow: string;

    MovementFast: string;

    Algorithm_state: string;

    level_one_start_time: string;

    rpm_average:string;

    average_apnea:string;

    need_to_testing_third_level:string;

    level_three_start_time:string;

    short_rpm_average:string;

    cartridge_is_replace:string;

    relaxed:string  ;

    predict:string;

    signal_quality:string;

    userid:string;

}