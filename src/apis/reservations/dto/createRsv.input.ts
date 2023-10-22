import { IsNotEmpty, IsString } from "class-validator";

export class CreateReservationInfoData {
    @IsString()
    rsv_id: string;

    @IsNotEmpty()
    @IsString()
    rsvr_id: string;

    @IsNotEmpty()
    @IsString()
    rsv_date: string;

    @IsNotEmpty()
    @IsString()
    rsv_start_time: string;

    @IsNotEmpty()
    @IsString()
    rsv_end_time: string;

    @IsString()
    rsv_purpose: string;
}