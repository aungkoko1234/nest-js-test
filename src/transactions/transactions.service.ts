import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transactions.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TransactionsService {
    constructor(@InjectRepository(Transaction) private transactionRepository : Repository<Transaction>){

    }

    async findAll() : Promise<Transaction[]>{
        return await this.transactionRepository.find();
    }

    async create(transaction : Transaction) : Promise<Transaction> {

        return await this.transactionRepository.save(transaction);
    }
    
    async update(transaction : Transaction) : Promise<UpdateResult> {
        return await this.transactionRepository.update(transaction.id,transaction);
    }

    async delete(id) : Promise<DeleteResult> {
        return await this.transactionRepository.delete(id)
    }

    async findOne(id) : Promise<Transaction>{
        return await this.transactionRepository.findOne(id)
    }
}
