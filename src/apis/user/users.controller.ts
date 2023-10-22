import { Controller, Get } from '@nestjs/common';
import { ReservationsService } from './reservations.serivce';

@Controller()
export class UsersController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  getReservation(): string {
    return this.usersService.getUsers();
  }
}