import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class conferenceRoom_res{
    @PrimaryColumn({ comment : '회의실 예약 번호'})
    res_id: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false,
        comment : '예약자명'
    })
    reserver_id: string;

    @Column({
        type: 'datetime',
        nullable: false,
        comment: '예약 시작시간'
    })
    res_start_time: string;

    @Column({
        type: 'datetime',
        nullable: false,
        comment: '예약 시작시간'
    })
    res_end_time: string;

    @Column
    ({
        type: 'varchar',
        nullable: false,
        comment: '회의실 예약 목적'
    })
    res_purpose: string;
}

