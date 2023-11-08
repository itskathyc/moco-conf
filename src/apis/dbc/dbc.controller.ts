import { Controller, Get, Post, Query } from '@nestjs/common';
import { DbcService } from './dbc.service';
import { InjectRepository } from '@nestjs/typeorm';
import { meetingRoomReservation } from '../reservations/entity/reservation.entity';

@Controller('dbc')
export class DbcController {
  constructor(private readonly dbcService: DbcService,
   ) {}
    
   @Post('/')
   fetchInfo(){
     const reserverInfo = {
       rsvr_id:'최다윤',
       rsv_purpose:'기술연구소회의',
       room_type:'conf-room'
     }
     this.dbcService.saveRes({reserverInfo})
   
   }
}