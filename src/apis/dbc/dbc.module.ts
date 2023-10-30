import { Module } from '@nestjs/common';
import { DbcController } from './dbc.controller';
import { DbcService } from './dbc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { assembly_rm_res } from '../reservations/entity/assemblyRmReservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([assembly_rm_res])],
  controllers: [DbcController],
  providers: [DbcService],
  exports: [DbcService],
})
export class DbcModule {}