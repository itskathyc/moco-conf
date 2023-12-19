import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ttest{
    @PrimaryColumn()
    order: string;
}