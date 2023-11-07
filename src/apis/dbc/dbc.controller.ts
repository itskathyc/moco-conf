import { Controller, Get, Query } from '@nestjs/common';
import { DbcService } from './dbc.service';

@Controller('dbc')
export class DbcController {
  constructor(private readonly dbcService: DbcService) {}

//   @Get('/')
//   mixedTest() {
//     this.dbcService.mixedTest();
//   }
//   @Get('/test')
//   mixedTest2() {
//     this.dbcService.connectTest();
//   }

//   @Get('/check')
//   checkingConnet(@Query('input') input) {
//     this.dbcService.checkConnected(input);
//   }
}