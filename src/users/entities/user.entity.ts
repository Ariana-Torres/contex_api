import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20 })
    username: string;

    @Column()
    password: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile

}
