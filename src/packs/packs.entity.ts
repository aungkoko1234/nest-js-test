import { Tag } from './../tag/tag.entity';
import { Type } from './../type/type.entity';
import { Alias } from './../alias/alias.entity';
import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import {Newbie} from '../newbie/newbie.entity'
@Entity()
export class Pack{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    display_order : number;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    total_credit : number;

    @Column()
    validity_month : number;

    @Column({type:"float"})
    price : number;

    @Column({type:"float"})
    estimate_price : number;

    @Column({nullable:true})
    tagId : number;

    @Column()
    typeId : number;

    @Column()
    newbieId : number;

    @Column()
    aliasId :number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    time: string;

    @ManyToOne(type => Newbie)
    @JoinColumn([
        { name: "newbieId", referencedColumnName: "id" },
    ])
    newbie: Newbie

    @ManyToOne(type => Alias)
    @JoinColumn([
        { name: "aliasId", referencedColumnName: "id" },
    ])
    alias: Alias

    @ManyToOne(type => Type)
    @JoinColumn([
        { name: "typeId", referencedColumnName: "id" },
    ])
    type: Type

    @ManyToOne(type => Tag)
    @JoinColumn([
        { name: "tagId", referencedColumnName: "id" },
    ])
    tag: Tag

}