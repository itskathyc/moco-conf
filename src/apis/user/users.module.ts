import { Module } from '@nestjs/common';
import { ReservationsService } from '../reservations/reservations.serivce';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user_info } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([user_info])
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService]
})
export class UsersModule {}
