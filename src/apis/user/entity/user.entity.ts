import { Entity, Column, PrimaryColumn, Generated, Unique } from 'typeorm';

@Entity()
export class user_info {
  // @Column({ type: 'varchar', length: 60, unique: true, comment: '회원 UID' })
  @Column({ type: 'varchar', unique: true, comment: '회원 UID' }) // 로컬 접속시
  @Generated('uuid')
  uid: string;

  @PrimaryColumn({ length: 50, comment: '회원 이메일' })
  eml: string;

  @PrimaryColumn({
    default: 0,
    width: 4,
    type: 'tinyint',
    comment: '가입 방법 - 0:일반, 1:구글, 2:네이버, 3:카카오',
  })
  rgst_tp: number;

  @Column({ length: 128, comment: '회원 비밀번호' })
  pw: string;

  @Column({ length: 30, comment: '회원 실명' })
  nm: string;

  @Column({ type: 'varchar', length: 30, comment: '회원 모바일 연락처' })
  mbp_num: string;

  @Column({
    type: 'tinyint',
    width: 4,
    default: 0,
    comment: '회원 레벨, 0: 일반, 15:관리자',
  })
  lv: number;

  @Column({ type: 'int', width: 11, default: 0, comment: '회원 보유 포인트' })
  hv_pnt: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
    comment: '회원 사진 URL',
  })
  pht_url: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
    comment: '회원 아이콘 URL',
  })
  ic_url: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    default: null,
    comment: '회원 회사명',
  })
  comp_nm: string;

  @Column({ type: 'tinyint', width: 4, default: 0, comment: '가입 경로' })
  jo_pth: number;

  @Column({ type: 'varchar', length: 10, comment: '우편번호', nullable: true })
  zpc: string;

  @Column({ type: 'varchar', length: 100, comment: '기본주소', nullable: true })
  bsc_addr: string;

  @Column({ type: 'varchar', length: 100, comment: '상세주소', nullable: true })
  dtl_addr: string;


  @Column({
    type: 'datetime',
    default: () => 'SYSDATE()',
    comment: '회원 가입 시간',
  })
  rgst_t: string;

  @Column({
    type: 'datetime',
    default: '0000-00-00 00:00:00',
    comment: '회원 정보 수정 시간',
  })
  upd_t: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: true,
    default: null,
    comment: '회원 가입 IP',
  })
  rgst_ip: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: true,
    default: null,
    comment: '회원 마지막 접속 IP',
  })
  lst_lg_ip: string;

  @Column({
    type: 'datetime',
    comment: '회원 마지막 접속 시간',
    nullable: true,
  })
  lst_lg_t: string;
}