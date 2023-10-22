import { Injectable, Scope } from '@nestjs/common';
import { CreateReservationInfoData } from './dto/createRsv.input';
import { v4 as uuidv4} from 'uuid';
import { conferenceRoom_res } from './entity/reservations.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable({scope: Scope.DEFAULT})
export class ReservationsService {

  constructor(
    @InjectRepository(conferenceRoom_res)
    private readonly rsvRepository : Repository<conferenceRoom_res>,
  ){}


  fetchReservationService(rsv_id) {
    return this.rsvRepository.findOne({where: rsv_id});
  }

  async createReservationService(createReservationData:CreateReservationInfoData){
    // 1. 회원인지 확인
    // 2. 정보기입
    // a. rsv_id 설정
    const rsv_id = uuidv4();
    await this.rsvRepository.save(createReservationData)
    return
  }

  updateReservationService(){
    return
  }

  deleteReservaitonService(){
    return
  }
}
