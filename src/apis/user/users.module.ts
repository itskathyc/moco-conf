import { Module } from '@nestjs/common';
import { ReservationsService } from '../reservations/reservations.serivce';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
  ReservationsService,//
],
})
export class UsersModule {}
