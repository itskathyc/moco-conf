import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ReservationsService } from './reservations.serivce';

@Controller('/reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  async fetchReservation() {
    return this.reservationsService.fetchReservationService();
  }

  @Post()
  async createReservation(
    @Body() createReservationInfoData
  ){
    return this.reservationsService.createReservationService();
  }

  @Put()
  async updateReservation(){
    return this.reservationsService.updateReservationService();
  }

  @Post()
  async cancelReservation(){
    return this.reservationsService.deleteReservaitonService();
  }
}