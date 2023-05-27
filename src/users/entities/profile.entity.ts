import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fullName: string;

    @Column()
    address: string;

    @Column({ type: Boolean })
    receiveEmails: boolean;
}
