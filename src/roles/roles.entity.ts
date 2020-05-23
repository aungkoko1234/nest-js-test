import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import {User} from '../users/user.entity';
@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    time: string;

    @OneToMany(type => User, user => user.role)
    users: User[];
}