import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';

@Entity()
export class Newbie{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'boolean',default: false})
    newbie_first_attend: boolean;

    @Column()
    newbie_addition_credit : number;

    @Column()
    newbie_note : string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    time: string;

}