import { Column, Entity } from 'typeorm';

@Entity()
export class ttest {
  @Column()
  number: number;

  @Column()
  writer: string;

  @Column()
  title: string;

  @Column()
  contents: string;
}
