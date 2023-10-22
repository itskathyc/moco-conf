export interface RsvSchema{
    res_id: string;
    rsvr: string;
    rsv_date: string;
    rsv_start_time: string;
    srv_end_time: string;
    rsv_purpose:string;
    rm_type: roomType;
}

export enum roomType{
    Assemlby,
    Room1,
    Room2
}

export interface RsvResData{
    reservation_info : RsvSchema;
}

export interface FetchRsvData{
    res_id: string;
}