import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class meetingRoomReservation{ 
    @PrimaryColumn({ comment : '회의실 예약 번호'})
    rsvt_id: string;

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
        comment: '회의실 분류'
    })
    rsvt_rm_no: string;

    
    @Column({
        type: 'datetime',
        nullable: false,
        comment: '예약 시작시간'
    })
    rsvt_start_dt: string;

    @Column({
        type: 'datetime',
        nullable: false,
        comment: '예약 종료시간'
    })
    rsvt_end_dt: string;

    @Column
    ({
        type: 'varchar',
        nullable: false,
        comment: '회의실 예약 목적'
    })
    rsvt_purpose: string;

    @Column
    ({
        type: 'varchar',
        nullable: false,
        comment: '회의실 예약 목적'
    })
    bg_color: string;

    @Column
    ({
        type: 'varchar',
        nullable: false,
        comment: '회의실 예약 목적'
    })
    other_ptcp: string;
}

