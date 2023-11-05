import { Injectable, Scope } from '@nestjs/common';
import { CreateReservationInfoData } from './dto/createRsv.input';
import { v4 as uuidv4} from 'uuid';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { conference_room_01 } from './entity/room1Resrvation.entity';
import { conference_room_02 } from './entity/room2Reservation.entity';
import { assembly_room } from './entity/assemblyRmReservation.entity';


@Injectable({scope: Scope.DEFAULT})
export class ReservationsService {

  constructor(
    @InjectRepository(conference_room_01)
    private readonly conf_room1 : Repository<conference_room_01>,
    @InjectRepository(conference_room_02)
    private readonly conf_room2 : Repository<conference_room_02>,
    @InjectRepository(assembly_room)
    private readonly asmb_room : Repository<assembly_room>,
  ){}


  fetchReservationService(rsv_id) {
    const fetchResult =  this.conf_room1.findOne({where: rsv_id});
    return fetchResult;
  }

  async createReservationService(createReservationData:CreateReservationInfoData){
    // 1. 회원인지 확인
    // 2. 정보기입
    // a. rsv_id 설정
    const rsv_id = uuidv4();
    // b. 어떤 방을 예약했는지에 따라 저장DB 설정
    //if()
    this.conf_room1.save(createReservationData);
    return
  }

  updateReservationService(){
    return
  }

  deleteReservaitonService(){
    return
  }
}
