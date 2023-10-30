import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.serivce';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbcModule } from '../dbc/dbc.module';

@Module({
  imports: [DbcModule, TypeOrmModule.forFeature([])],
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