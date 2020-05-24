import { CreatePromoDto } from './dto/create-promo.dto';
import { PromoCode } from './promocodes.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PromocodesService {
    constructor(@InjectRepository(PromoCode) private promoRepository : Repository<PromoCode>){}

    async findAll() : Promise<PromoCode[]>{
        return await this.promoRepository.find();
    }

    async create(promo : CreatePromoDto) : Promise<CreatePromoDto> {
        const count = await this.promoRepository.count();
        const newId = String(count +1);
        const promoCode = new PromoCode();
        promoCode.id = newId;
        promoCode.code = promo.code;
        promoCode.discount = promo.discount;
        return await this.promoRepository.save(promoCode);
    }
    
    async update(promo : PromoCode) : Promise<UpdateResult> {
        return await this.promoRepository.update(promo.id,promo);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.promoRepository.delete(id)
    }

    async findOne(id) : Promise<PromoCode>{
        return await this.promoRepository.findOne(id)
    }

    async check(code) : Promise<PromoCode>{
        return await this.promoRepository.findOne({code:code});
    }
}
