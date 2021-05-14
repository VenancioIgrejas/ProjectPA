import {Entity, PrimaryGeneratedColumn, Column, Double} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login_id: number;

    @Column()
    name: string;

    @Column()
    category_id: number;

    @Column()
    comment: string;

    @Column()
    provider_id: number;

    @Column({ type: "decimal"})
    price: Double;
    
    @Column()
    quantity: number;

    @Column()
    date_in: Date;
}
