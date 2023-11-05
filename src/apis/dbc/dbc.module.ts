import { Module } from '@nestjs/common';
import { DbcController } from './dbc.controller';
import { DbcService } from './dbc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { assembly_room } from '../reservations/entity/assemblyRmReservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([assembly_room])],
  controllers: [DbcController],
  providers: [DbcService],
  exports: [DbcService],
})
export class DbcModule {}