import { Controller, Get, Query } from '@nestjs/common';
import { DbcService } from './dbc.service';

@Controller('dbc')
export class DbcController {
  constructor(private readonly dbcService: DbcService) {}

}