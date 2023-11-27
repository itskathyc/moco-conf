import { Entity, Column, PrimaryColumn, Generated, Unique } from 'typeorm';

@Entity()
export class user_info {
  @Column({ type: 'varchar', unique: true, comment: '회원 UID' }) // 로컬 접속시
  @Generated('uuid')
  user_id: string;

  @PrimaryColumn({ length: 50, comment: '회원명' })
  user_name: string;

  @PrimaryColumn({ length: 50, comment: '회원 이메일' })
  user_email: string;

  @PrimaryColumn({
    type: 'string',
    comment: '비밀번호'
  })
  user_passwd: number;

  @Column({ length: 128, comment: '회원 소속부서' })
  user_dept: string;
}