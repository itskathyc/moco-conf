import { Controller, Get } from '@nestjs/common';
import { ReservationsService } from './reservations.serivce';

@Controller()
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  getReservation(): string {
    return this.reservationsService.getReservation();
  }

  createReservation(){
    return
  }

  updateReservation(){
    return
  }

  cancelReservation(){
    return
  }
}