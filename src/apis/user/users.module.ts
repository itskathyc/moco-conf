import { Module } from '@nestjs/common';
import { ReservationsResolver } from '../reservations/reservations.controller';
import { ReservationsService } from '../reservations/reservations.serivce';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
  ReservationsService,//
],
})
export class UsersModule {}
