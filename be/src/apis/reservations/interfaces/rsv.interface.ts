import { CreateReservationInfoInput } from '../dto/createRsv.input';

export interface RsvSchema {
  rsvt_id: string;
  rsvr_id: string;
  rsvt_rm_no: number;
  rsv_start_dt: Date;
  srv_end_dt: Date;
  rsv_purpose: string;
  bg_color: string;
  other_ptcp: string;
}

export enum roomType {
  Assemlby,
  Room1,
  Room2,
}

export interface CreateReservationReqData {
  createReservationInput: CreateReservationInfoInput;
}

export interface RsvResData {
  reservation_info: RsvSchema;
}

export interface FetchRsvData {
  res_id: string;
}
