import { Module } from '@nestjs/common';
import { DbcController } from './dbc.controller';
import { DbcService } from './dbc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { meetingRoomReservation } from '../reservations/entity/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([meetingRoomReservation])],
  controllers: [DbcController],
  providers: [DbcService],
  exports: [DbcService],
})
export class DbcModule {}