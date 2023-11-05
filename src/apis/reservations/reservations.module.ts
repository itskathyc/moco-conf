import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.serivce';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbcModule } from '../dbc/dbc.module';
import { conference_room_01 } from './entity/room1Resrvation.entity';
import { conference_room_02 } from './entity/room2Reservation.entity';
import { assembly_room } from './entity/assemblyRmReservation.entity';

@Module({
  imports: [DbcModule, TypeOrmModule.forFeature([conference_room_01, conference_room_02, assembly_room])],
  controllers: [ReservationsController],
  providers: [ReservationsService,//
],
})
export class ReservationsModule {}



/*
@Module({
  imports: [
    TypeOrmModule.forFeature([user_info]),
    TokenModule,
    //CommonModule,
    forwardRef(() => CommonModule),
    DbcModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
*/