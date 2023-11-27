import { Injectable, Scope } from '@nestjs/common';
import { CreateReservationInfoData } from './dto/createRsv.input';
import { v4 as uuidv4} from 'uuid';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { meetingRoomReservation } from './entity/reservation.entity';


@Injectable({scope: Scope.DEFAULT})
export class ReservationsService {

  constructor(
    @InjectRepository(meetingRoomReservation)
    private readonly mr_reserve : Repository<meetingRoomReservation>,
  ){}


  fetchReservationService(rsv_id) {
    const fetchResult =  this.mr_reserve.findOne({where: rsv_id});
    return fetchResult;
  }

  async createReservationService(createReservationData:CreateReservationInfoData){
    // 1. 회원인지 확인
    // 2. 정보기입
    // a. rsv_id 설정
    const rsv_id = uuidv4();
    // b. 어떤 방을 예약했는지에 따라 저장DB 설정
    //if()
    this.mr_reserve.save(createReservationData);
    return
  }

  changeReservationService(){
    return
  }

  cancelReservaitonService(){
    return
  }
}
