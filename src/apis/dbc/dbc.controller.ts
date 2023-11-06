import { Controller, Get, Post } from '@nestjs/common';
import { DbcService } from './dbc.service';

@Controller('dbc')
export class DbcController {
  constructor(private readonly dbcService: DbcService) {}

  @Get('/')
  mixedTest() {
    this.dbcService.getTest();
  }
  @Post('/')
  mixedTest2() {
    this.dbcService.connectTest();
  }
}
