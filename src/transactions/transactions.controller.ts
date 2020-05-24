import { Pack } from './../packs/packs.entity';
import { PacksService } from './../packs/packs.service';
import { PromoCode } from './../promocodes/promocodes.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ValidationPipe } from './../share/validtion.pipe';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { PromocodesService } from './../promocodes/promocodes.service';
import { TransactionsService } from './transactions.service';
import { Controller, UseGuards, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Transaction } from './transactions.entity';

@Controller('transactions')
export class TransactionsController {
    constructor(private transactionService : TransactionsService,private promoService : PromocodesService,private packsService : PacksService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    index() : Promise<Transaction[]>{
        return this.transactionService.findAll();
    } 
 
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body(new ValidationPipe()) createTransDto:CreateTransactionDto ){
    let transactionDiscount = 0.0;
    let promo : PromoCode = null;
    let gst : number;
    let grandTotal : number;
    const pack : Pack = await this.packsService.findOne(createTransDto.packId)
    const packPrice = pack.price; 
    if(createTransDto.promoCodeId){
        promo = await this.promoService.findOne(createTransDto.promoCodeId);
        const discount = promo.discount;
        transactionDiscount = parseFloat((discount * packPrice/100).toFixed(2));
        gst = parseFloat((7 * packPrice/100).toFixed(2));
        grandTotal = parseFloat((packPrice - transactionDiscount + gst).toFixed(2)); 
    }else{
        gst = parseFloat((7 * packPrice/100).toFixed(2));
        grandTotal = parseFloat((packPrice + gst).toFixed(2)); 
    }  

     
     console.log("trans discount",transactionDiscount) 
     const  newTrans :Transaction = new Transaction();
     newTrans.promoCodeId = createTransDto.promoCodeId;
     newTrans.userId = createTransDto.userId;
     newTrans.packId = createTransDto.packId;
     newTrans.gst = gst;
     newTrans.subTotal = packPrice;
     newTrans.discount = transactionDiscount;
     newTrans.total = grandTotal;
     try {
        const transaction = await this.transactionService.create(newTrans)
        if(promo){
            promo.is_used = true;
            await this.promoService.update(promo);
        }
        return {
            "errorCode" : 0,
            "message" : 'Success',
            "info" : `Transaction ${transaction.id} was created`,
            "transaction" : transaction
        }
     } catch (error) {
         return {
             "errorCode" : 1,
             "error" : error.message
         }
     }
      
    }
     
    @UseGuards(JwtAuthGuard)
    @Put(':id/update')
    async update(@Param('id') id, @Body() promoData: Transaction) : Promise<any> {
      promoData.id = String(id);
      return this.transactionService.update(promoData);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id/delete')
    async delete(@Param('id') id) : Promise<any> {
     return this.transactionService.delete(id)
    }
}
