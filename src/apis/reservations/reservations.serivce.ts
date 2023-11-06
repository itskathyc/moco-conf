import { Injectable, Scope } from '@nestjs/common';
import { CreateReservationInfoData } from './dto/createRsv.input';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { cr01_res } from './entity/room1Resrvation.entity';
import { cr02_res } from './entity/room2Reservation.entity';
import { assembly_rm_res } from './entity/assemblyRmReservation.entity';

@Injectable({ scope: Scope.DEFAULT })
export class ReservationsService {
  constructor(
    @InjectRepository(cr01_res)
    private readonly conf_room1: Repository<cr01_res>,
    @InjectRepository(cr02_res)
    private readonly conf_room2: Repository<cr02_res>,
    @InjectRepository(assembly_rm_res)
    private readonly asmb_room: Repository<assembly_rm_res>,
  ) {}

  fetchReservationService(rsv_id) {
    const fetchResult = this.conf_room1.findOne({ where: rsv_id });
    return fetchResult;
  }

  async createReservationService(
    createReservationData: CreateReservationInfoData,
  ) {
    // 1. 회원인지 확인
    // 2. 정보기입
    // a. rsv_id 설정
    const rsv_id = uuidv4();
    // b. 어떤 방을 예약했는지에 따라 저장DB 설정
    //if()
    this.conf_room1.save(createReservationData);
    return;
  }

  updateReservationService() {
    return;
  }

  deleteReservaitonService() {
    return;
  }
}
