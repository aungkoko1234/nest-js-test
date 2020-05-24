import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../roles/roles.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    roleId: number;

    @ManyToOne(type => Role)
    @JoinColumn([
        { name: "roleId", referencedColumnName: "id" },
    ])
    role: Role

}