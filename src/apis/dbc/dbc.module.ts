import { Module } from '@nestjs/common';
import { DbcController } from './dbc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { meetingRoomReservation } from '../reservations/entity/reservation.entity';
import { DbcService } from './dbc.service';
import { ttest } from './entities/ttest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([meetingRoomReservation, ttest])],
  controllers: [DbcController],
  providers: [DbcService],
  exports: [DbcService],
})
export class DbcModule {}