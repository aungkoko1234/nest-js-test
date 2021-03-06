import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';

@Entity()
export class Tag{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    time: string;

}