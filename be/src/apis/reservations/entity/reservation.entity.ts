import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class meetingRoomReservation {
  @PrimaryGeneratedColumn('uuid', { comment: '회의실 예약 번호' })
  rsvt_id: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    comment: '예약자명',
  })
  rsvr_id: string;

  @Column({
    type: 'int',
    nullable: false,
    comment: '회의실 분류',
  })
  rsvt_rm_no: number;

  @Column({
    type: 'datetime',
    nullable: false,
    comment: '예약 시작시간',
  })
  rsvt_start_dt: Date;

  @Column({
    type: 'datetime',
    nullable: false,
    comment: '예약 종료시간',
  })
  rsvt_end_dt: Date;

  @Column({
    type: 'varchar',
    nullable: false,
    comment: '회의실 예약 목적',
  })
  rsvt_purpose: string;

  @Column({
    type: 'varchar',
    nullable: false,
    comment: '예약 구분을 위한 색',
  })
  bg_color: string;

  @Column({
    type: 'varchar',
    nullable: false,
    comment: '회의실 예약 목적',
  })
  other_ptcp: string;
}
