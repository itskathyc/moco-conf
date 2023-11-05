import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class assembly_room{ //conference_room_01_reservation
    @PrimaryColumn({ comment : '회의실 예약 번호'})
    rsv_id: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false,
        comment : '예약자명'
    })
    rsvr_id: string;

    @Column({
        type: 'date',
        nullable: false,
        comment: '예약일자'
    })
    rsv_date: string;

    
    @Column({
        type: 'datetime',
        nullable: false,
        comment: '예약 시작시간'
    })
    rsv_start_time: string;

    @Column({
        type: 'datetime',
        nullable: false,
        comment: '예약 종료시간'
    })
    rsv_end_time: string;

    @Column
    ({
        type: 'varchar',
        nullable: false,
        comment: '회의실 예약 목적'
    })
    rsv_purpose: string;
}

