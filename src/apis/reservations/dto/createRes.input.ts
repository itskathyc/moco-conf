import { IsNotEmpty, IsString } from "class-validator";

export class CreateReservationInfoData {
    @IsString()
    res_id: string;

    @IsNotEmpty()
    @IsString()
    reserver_id: string;

    @IsNotEmpty()
    @IsString()
    res_start_time: string;

    @IsNotEmpty()
    @IsString()
    res_end_time: string;

    @IsNotEmpty()
    @IsString()
    res_purpose: string;
}