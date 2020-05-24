import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class PromoCode{
    @PrimaryColumn({type : 'varchar',unique:true,length:5})
    id:string;

    @Column({type : 'varchar',unique:true,length:10})
    code : string;

    @Column()
    discount : number;

    @Column({type: 'boolean',default:false})
    is_used : boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    time: string;
}