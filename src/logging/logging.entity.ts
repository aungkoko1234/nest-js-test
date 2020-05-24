import { User } from './../users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';


@Entity()
export class Logging{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description: string;

    @Column()
    effectedTable : string;

    @Column()
    action : string;

    @PrimaryColumn()
    createdBy : number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    time: string;

    @ManyToOne(type => User)
    @JoinColumn([
        { name: "createdBy", referencedColumnName: "id" },
    ])
    user: User

}