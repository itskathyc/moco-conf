import { Injectable, Scope } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user_info } from './entity/user.entity';


@Injectable({scope: Scope.DEFAULT})
export class UserService {

  constructor(
    @InjectRepository(user_info)
    private readonly rsvRepository : Repository<user_info>,
  ){}


  fetchUserInfoService() {
  }

  async createUserService(){

  }

  updateReservationService(){
    return
  }

  deleteReservaitonService(){
    return
  }
}
