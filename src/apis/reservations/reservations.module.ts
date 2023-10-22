import { Module } from '@nestjs/common';
import { ReservationsController } from './reservation.controller';
import { ReservationsService } from './reservations.serivce';

@Module({
  imports: [],
  controllers: [ReservationsController],
  providers: [ReservationsService,//
],
})
export class ReservationsModule {}
