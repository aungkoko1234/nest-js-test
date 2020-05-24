import { PromoCode } from './../promocodes/promocodes.entity';
import { Pack } from './../packs/packs.entity';
import { User } from './../users/user.entity';
import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @PrimaryColumn()
    userId : number

    @PrimaryColumn()
    packId : string

    @Column({nullable:true})
    promoCodeId: string

    @Column({type: "float"})
    discount :number
    
    @Column({type: "float"})
    gst :number


    @Column({type:"float"})
    subTotal : number

    @Column({type:"float"})
    total : number


    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    time: string;

    @ManyToOne(type => User)
    @JoinColumn([
        { name: "userId", referencedColumnName: "id" },
    ])
    user: User

    @ManyToOne(type => Pack)
    @JoinColumn([
        { name: "packId", referencedColumnName: "id" },
    ])
    pack: Pack

    @OneToOne(type => PromoCode)
    @JoinColumn([
        {
            name : "promoCodeId",
            referencedColumnName:"id"
        }
    ])
    promoCode : PromoCode

}