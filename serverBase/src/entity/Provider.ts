import {Entity, PrimaryGeneratedColumn, Column, Double} from "typeorm";

@Entity()
export class Provider {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login_id: number;

    @Column()
    name: string;

    @Column()
    cel: number;

    @Column()
    info: string;

    @Column({ type: "decimal"})
    per_price: Double;

}
