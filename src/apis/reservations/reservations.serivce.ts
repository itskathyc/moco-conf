import { Injectable, Scope } from '@nestjs/common';

@Injectable({scope: Scope.DEFAULT})
export class ReservationsService {
  getReservation(): string {
    return 'Hello World!';
  }
}
