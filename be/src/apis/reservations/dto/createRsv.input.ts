import {
  IsArray,
  IsDate,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateReservationInfoInput {
  @IsString()
  @IsNotEmpty()
  bg_color: string;

  @IsString()
  @IsNotEmpty()
  rsvr_id: string;

  @IsNotEmpty()
  @IsDateString()
  rsvt_start_dt: Date;

  @IsDateString()
  @IsNotEmpty()
  rsvt_end_dt: Date;

  @IsNotEmpty()
  @IsString()
  rsvt_purpose: string;

  @IsInt()
  @IsNotEmpty()
  rsvt_rm_no: number;

  @IsArray()
  @IsOptional()
  other_ptcp?: string[];
}
