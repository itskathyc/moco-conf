import { Injectable, Scope } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { meetingRoomReservation } from './entity/reservation.entity';
import {
  CreateReservationReqData,
  RsvSchema,
} from './interfaces/rsv.interface';

@Injectable({ scope: Scope.DEFAULT })
export class ReservationsService {
  constructor(
    @InjectRepository(meetingRoomReservation)
    private readonly mr_reserve: Repository<meetingRoomReservation>,
  ) {}

  fetchReservationService(rsv_id) {
    const fetchResult = this.mr_reserve.findOne({ where: rsv_id });
    return fetchResult;
  }

  async createReservationService({
    createReservationInput,
  }: CreateReservationReqData) {
    // 1. 회원인지 확인
    // 2. 정보기입
    console.log(createReservationInput);
    // a. rsv_id 설정
    // b. 어떤 방을 예약했는지에 따라 저장DB 설정
    if (createReservationInput.other_ptcp) {
      const otherPtcpString: string = String(createReservationInput.other_ptcp);
    } else {
      delete createReservationInput.other_ptcp;
    }

    // const insertedInput = await this.mr_reserve.save(reserver);
  }

  changeReservationService() {
    return;
  }

  cancelReservaitonService() {
    return;
  }
}
