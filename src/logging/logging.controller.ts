import { Logging } from './logging.entity';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { LoggingService } from './logging.service';
import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';

@Controller('logging')
export class LoggingController {
    constructor(private loggingService : LoggingService){

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    index() : Promise<Logging[]>{
        return this.loggingService.findAll();
    } 
 
}
