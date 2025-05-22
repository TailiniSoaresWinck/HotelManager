import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserLevel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    level: string
    
}
