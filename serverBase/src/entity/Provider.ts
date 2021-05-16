import {Entity, PrimaryGeneratedColumn, Column, Double, OneToOne, JoinColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Provider {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn()
    User: User;

    @Column()
    name: string;

    @Column()
    cel: string;

    @Column()
    info: string;

    @Column({ type: "decimal"})
    per_price: Double;

}
