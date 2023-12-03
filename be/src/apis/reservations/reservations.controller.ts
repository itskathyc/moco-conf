import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ReservationsService } from './reservations.serivce';
import { CreateReservationInfoData } from './dto/createRsv.input';
import { FetchRsvData, RsvResData } from './interfaces/rsv.interface';

@Controller('/reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  async fetchReservation(rsv_id: FetchRsvData)
  //: Promise<RsvResData> 
  {
    const fetchResult =  await this.reservationsService.fetchReservationService(rsv_id);
    return fetchResult;
  }

  @Post()
  async createReservation(
    @Body() createReservationData : CreateReservationInfoData
  ): Promise<RsvResData>{
    await this.reservationsService.createReservationService(createReservationData);
    return 
  }

  @Put()
  async changeReservation(){
    return this.reservationsService.changeReservationService();
  }

  @Post()
  async cancelReservation(){
    return this.reservationsService.cancelReservaitonService();
  }
}