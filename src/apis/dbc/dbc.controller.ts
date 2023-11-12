import { Controller, Get, Post, } from '@nestjs/common';
import { DbcService } from './dbc.service';

@Controller('dbc')
export class DbcController {
  constructor(private readonly dbcService: DbcService,
   ) {}
    
    @Get('/')
    mixedTest(){
      this.dbcService.mixedTest();
    }

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