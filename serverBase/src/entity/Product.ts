import {Entity, PrimaryGeneratedColumn, Column, Double, OneToOne, JoinColumn} from "typeorm";
import {User} from "./User";
import {Category} from "./Category";
import {Provider} from "./Provider";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn()
    User: User;

    @Column()
    name: string;

    @OneToOne(() => Category)
    @JoinColumn()
    Category: Category;

    @Column()
    comment: string;

    @OneToOne(() => Provider)
    @JoinColumn()
    Provider: Provider;

    @Column({ type: "decimal"})
    price: Double;
    
    @Column()
    quantity: number;

    @Column()
    date_in: Date;
}
